"use client"

import { createContext, useReducer } from "react";
import { ModalAction, ModalReducer } from "@/reducers/ModalReducer";

export interface ModalState {
  loginModal: { isOpen: boolean },
  signupModal: { isOpen: boolean },
  logoutModal: { isOpen: boolean }
}

export const ModalContext = createContext({} as { 
  state: ModalState,
  dispatch: React.Dispatch<ModalAction>
})

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ModalReducer, {
    loginModal: { isOpen: false },
    signupModal: { isOpen: false },
    logoutModal: { isOpen: false }
  })

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}