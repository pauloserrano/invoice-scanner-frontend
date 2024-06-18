import { createContext, useState } from "react";

interface IModal {
  isOpen: boolean
  onOpen: (callback?: () => void) => void
  onClose: (callback?: () => void) => void
}

const ModalContext = createContext({} as IModal)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function onOpen(callback?: () => void) {
    setIsOpen(true)
    callback && callback()
  }

  function onClose(callback?: () => void) {
    setIsOpen(false)
    callback && callback()
  }

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  )
}