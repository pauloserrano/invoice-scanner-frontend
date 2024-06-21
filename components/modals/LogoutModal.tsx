"use client"

import { signOut } from "next-auth/react"
import { useModalContext } from "@/hooks/useModalContext"
import { Modal } from "@/components"

export const LogoutModal = () => {
  const { state, actions } = useModalContext()

  const handleSubmit = async () => {
    await signOut({ callbackUrl: "/", redirect: true })
  }

  return (
    <Modal 
      title="Logout"
      actionLabel="Logout"
      isOpen={state.logoutModal.isOpen}
      onClose={() => actions.closeLogoutModal()}
      onSubmit={handleSubmit}
      includeOauth={false}
    >
      <div className="flex flex-col gap-4 pb-4">
        <section className="text-center pb-8">
          <h2 className="text-3xl text-black/90 font-bold">Leaving already?</h2>
          <h3 className="font-light text-black/60 mt-2">Are you sure?</h3>
        </section>
      </div>
    </Modal>
  )
}
