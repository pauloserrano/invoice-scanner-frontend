'use client'

import { createContext, useState } from 'react'

interface NavContextState {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavContext = createContext({} as NavContextState)

export const NavContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  )
}
