import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      name: "google",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) throw new Error("Invalid Credentials")

        const res = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/auth/signin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...credentials, provider: 'credentials' }),
        })

        if (!res.ok) {
          console.log(res.statusText)
          return null
        }

        return await res.json()
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Handle credential-based login
      if (account?.type === "credentials" && user) { 
        return {
          ...token,
          ...user 
        }
      }

      // Handle OAuth login
      if (account?.type === "oauth" && user) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/auth/oauth`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            email: user.email,
            name: user.name,
            image: user.image,
            provider: "google",
          })
        })

        if (!response.ok) {
          console.log(response.statusText)
          return token
        }

        const data = await response.json()

        return {
          ...token,
          ...data
        }
      }

      return token
    },

    async session({ token, session }) {
      return {
        ...session,
        ...token
      }
    }
  },
  session: { strategy: "jwt" },
}