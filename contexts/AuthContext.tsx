import { createContext } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const isAuthenticated = true

  async function signIn() {
    console.log('sign in')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
