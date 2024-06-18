import { getServerSession } from "next-auth"
import { authOptions } from "@/config/auth"

export default async function UserProfile() {
  const session = await getServerSession(authOptions)
  
  return (
    <div>
      <div className="p-2 bg-gradient-to-b from-white to-slate-400 text-slate-900 text-center">User Profile</div>
      <div className="grid grid-cols-2 p-2 gap-2 bg-white/90">
        <p className="p-2 text-slate-500">Name: </p>
        <p className="p-2 text-slate-900">{session?.user.name}</p>
        <p className="p-2 text-slate-500">Email: </p>
        <p className="p-2 text-slate-900">{session?.user.email}</p>
      </div>
    </div>
  )
}
