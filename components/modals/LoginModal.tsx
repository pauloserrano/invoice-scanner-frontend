"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"
import { useModalContext } from "@/hooks/useModalContext"
import { Modal, ModalInput } from "@/components"

export const LoginModal = () => {
  const [user, setUser] = useState({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { state, actions } = useModalContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!user.email || !user.password) {
      return toast.error("Please fill in all fields")
    }

    try {
      setIsLoading(true)

      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false
      })

      if (!res?.ok) {
        throw new Error("Invalid Credentials")
      }

      actions.closeLoginModal()
      toast.success("Login Success!")
      
    } catch (error: any) {
      toast.error(error.message)
      
    } finally {
      setIsLoading(false)
    }
  }

  const footer = (
    <div className="text-black/80 text-center mt-4 font-light">
      <div className="flex flex-row justify-center gap-2">
        <div>First time?</div>
        <div 
          className="text-neutral-800 cursor-pointer hover:underline"
          onClick={() => {
            actions.closeLoginModal()
            actions.openSignupModal()
          }}
        >
          Sign up
        </div>
      </div>
    </div>
  )

  return (
    <Modal 
      title="Login"
      actionLabel="Login"
      isOpen={state.loginModal.isOpen}
      onClose={() => actions.closeLoginModal()}
      onSubmit={handleSubmit}
      footer={footer}
      disabled={isLoading}
    >
      <div className="flex flex-col gap-4 pb-4">
        <section className="text-center pb-8">
          <h2 className="text-3xl text-black/90 font-bold">Welcome back!</h2>
          <h3 className="font-light text-black/60 mt-2">Login to your account</h3>
        </section>
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
      </div>
    </Modal>
  )
}
