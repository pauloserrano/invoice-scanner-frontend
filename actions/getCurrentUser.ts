import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth"

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession()

    if (!session?.user?.email) {
      return null
    }

    const currentUser = session.user

    return currentUser

  } catch (error: any) {
    return null
  }
}