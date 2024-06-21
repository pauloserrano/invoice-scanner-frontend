"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { useModalContext } from "@/hooks/useModalContext"
import { Modal, ModalInput } from "@/components"

export const SignupModal = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { state, actions } = useModalContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      return toast.error("Please fill in all fields")
    }

    if (user.password !== user.confirmPassword) {
      return toast.error("Passwords do not match")
    }

    try {
      setIsLoading(true)

      const { name, email, password } = user

      const res = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (!res?.ok) {
        console.log(res)
        throw new Error("Something went wrong...")
      }

      actions.closeLoginModal()
      toast.success("Account created successfully!")
      
    } catch (error: any) {
      toast.error(error.message)
      
    } finally {
      setIsLoading(false)
    }
  }

  const footer = (
    <div className="text-black/80 text-center mt-4 font-light">
      <div className="flex flex-row justify-center gap-2">
        <div>Already have an account?</div>
        <div 
          className="text-neutral-800 cursor-pointer hover:underline"
          onClick={() => {
            actions.closeSignupModal()
            actions.openLoginModal()
          }}
        >
          Sign in
        </div>
      </div>
    </div>
  )

  return (
    <Modal 
      title="Register"
      actionLabel="Create account"
      isOpen={state.signupModal.isOpen}
      onClose={() => actions.openSignupModal()}
      onSubmit={handleSubmit}
      footer={footer}
      disabled={isLoading}
    >
      <div className="flex flex-col gap-4 pb-4">
        <section className="text-center pb-8">
          <h2 className="text-3xl text-black/90 font-bold">New here?</h2>
          <h3 className="font-light text-black/60 mt-2">Create your account</h3>
        </section>
        <ModalInput 
          label="Name"
          type="text"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <ModalInput 
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <ModalInput 
          label="Password"
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <ModalInput 
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
    </Modal>
  )
}
