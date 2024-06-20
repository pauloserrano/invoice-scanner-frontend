"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from './Button'
import Avatar from './Avatar'

interface SignInButtonProps {
  currentUser: any
}

export const SignInButton = ({ currentUser }: SignInButtonProps) => {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className='flex items-center gap-4 ml-auto'>
        <p className="text-white">{currentUser.name}</p>
        <Avatar src={session.user.image || "/assets/placeholder.jpg"} />
        <Button small outline>
          <Link 
            href="/api/auth/signout"
            className="flex gap-4 ml-auto text-white"
          >
            Logout
          </Link>
        </Button>
      </div>
    )
  }
  
  return (
    <div className='flex items-center gap-4 ml-auto'>
      <Link 
        href="/api/auth/signin"
        className="flex gap-4 ml-auto text-white py-2 px-4 rounded"
      >
        Login
      </Link>
      <Link 
        href="/signup"
        className="flex gap-4 ml-auto text-white bg-primary py-2 px-4 rounded"
      >
        Sign up
      </Link>
    </div>
  )
}
