import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  pages: { signIn: "/" },
  session: { 
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {},
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development"
})

export { handler as GET, handler as POST }
