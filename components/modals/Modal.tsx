"use client"

import { useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { Button } from "../Button"
import { FcGoogle } from "react-icons/fc"
import { signIn } from "next-auth/react"

interface ModalProps {
  title: string
  disabled?: boolean
  isOpen: boolean
  onClose: () => void
  actionLabel: string
  onSubmit: () => void
  secondaryActionLabel?: string
  secondaryAction?: () => void
  children?: React.ReactNode
  footer?: React.ReactNode
}

export function Modal({ isOpen, onClose, onSubmit, title, actionLabel, disabled, secondaryAction, secondaryActionLabel, children, footer }: ModalProps) {
  const [showModal, setShowModal] = useState<boolean>(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) return

    setShowModal(false)
    setTimeout(onClose, 300)

  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) return

    onSubmit()
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return

    secondaryAction()
  }, [disabled, secondaryAction])

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        className="modal-overlay">
        <div
          className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto"
        >
          <div
            className={` translate duration-300 h-full
              ${showModal ? 'translate-y-0' : 'translate-y-full'}
              ${showModal ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <article
              className=" translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-[#eee] outline-none focus:outline-none">
              
              <header className="relative flex items-center justify-center p-6 rounded-t border-b-[1px] border-black/10">
                <h3 className="text-lg text-black font-semibold">{title}</h3>
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute right-6">
                  <IoMdClose color="black" size={24}/>
                </button>
              </header>
              
              <main className="relative p-6">
                {children}

                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryActionLabel && (
                    <Button 
                      outline
                      disabled={disabled}
                      onClick={handleSecondaryAction}
                      fullWidth
                    >
                      {secondaryActionLabel}
                    </Button>
                  )}
                  <Button 
                    disabled={disabled}
                    onClick={handleSubmit}
                    fullWidth
                  >
                    {actionLabel}
                  </Button>
                </div>
              </main>
              
              <footer className="flex flex-col gap-4 mt-3 p-6">
                <hr />
                <Button 
                  outline
                  icon={FcGoogle}
                  onClick={() => signIn("google")}
                  buttonStyles="border-black/20 bg-white"
                  fullWidth
                >
                  <span className="text-black/80">Continue with Google</span>
                </Button>
                {footer}
              </footer>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
