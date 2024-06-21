"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button, Avatar } from '@/components'
import { useModalContext } from '@/hooks/useModalContext'

export const AuthContainer = () => {
  const { data: session } = useSession()
  const { actions } = useModalContext()

  if (!session) {
    return (
      <div className='flex items-center gap-4 ml-auto'>
        <button 
          onClick={() => actions.openLoginModal()}
          className="flex gap-4 ml-auto text-white py-2 px-4 rounded"
        >
          Login
        </button>
        <button 
          onClick={() => actions.openSignupModal()}
          className="flex gap-4 ml-auto text-white bg-primary py-2 px-4 rounded"
        >
          Sign up
        </button>
      </div>
    )
  }
  
  return (
    <div className='hidden xl:flex items-center gap-8 ml-auto'>
      <div className='flex gap-4 items-center justify-between'>
        <p className="text-white">{session.user.name}</p>
        <Avatar src={session.user.image || "/assets/placeholder.jpg"} />
      </div>
      <Button small outline>
        <button
          onClick={() => actions.openLogoutModal()}
          className="flex gap-4 ml-auto text-white"
        >
          Logout
        </button>
      </Button>
    </div>
  )
}
