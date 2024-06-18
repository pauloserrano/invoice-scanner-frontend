"use client"

import { Button } from "@/components"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export default function SignUp() {
  const router = useRouter()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user.email || !user.password) return

    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    
    if (!res.ok) {
      // TODO Add Error Toast
      alert(res.statusText)
      return
    }

    const data = await res.json()
    // TODO Add Success Toast
    alert("Success")
    console.log(data)

    router.push("/api/auth/signin")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center w-full lg:w-[500px] mx-auto my-8">
      <input 
        type="text" 
        name="name" 
        placeholder="name" 
        value={user.name}
        onChange={handleChange}
        className="text-black py-2 px-4 rounded w-full"
      />
      <input
        type="text" 
        name="email" 
        placeholder="email" 
        value={user.email}
        onChange={handleChange}
        className="text-black py-2 px-4 rounded w-full"
        required 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="password" 
        value={user.password}
        onChange={handleChange}
        className="text-black py-2 px-4 rounded w-full"
        required 
      />
      <Button>SignUp</Button>
    </form>
  )
}
