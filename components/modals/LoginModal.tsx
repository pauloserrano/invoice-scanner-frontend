"use client"

import { ChangeEvent, useState } from "react"
import Modal from "./Modal"

export const LoginModal = () => {
  const [user, setUser] = useState({ email: "", password: "", name: "" })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <Modal 
      title="Login"
      actionLabel="Submit"
      secondaryActionLabel="Close"
      isOpen={true}
      onClose={() => {}}
      onSubmit={() => {}}
    >
      <div className="flex flex-col gap-4">
      <input
        type="text" 
        name="email" 
        placeholder="email" 
        value={user.email}
        onChange={handleChange}
        className="text-black py-2 px-4 rounded w-full border"
        required 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="password" 
        value={user.password}
        onChange={handleChange}
        className="text-black py-2 px-4 rounded w-full border"
        required 
      />
      </div>
    </Modal>
  )
}
