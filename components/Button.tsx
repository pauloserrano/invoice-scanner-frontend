"use client"

import { IconType } from "react-icons"

interface ButtonProps {
  outline?: boolean
  small?: boolean
  fullWidth?: boolean
  icon?: IconType
  buttonStyles?: string
  children: React.ReactNode
  [prop: string]: any
}

export function Button({ icon: Icon, outline, small, fullWidth, children, buttonStyles, ...otherProps }: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={`
        relative
        rounded-lg
        transition
        hover:opacity-80
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${buttonStyles}
        ${fullWidth
          ? 'w-full'
          : ''
        }
        ${outline 
          ? 'bg-transparent border-white text-white' 
          : 'bg-rose-500 border-rose-500 text-white'
        }
        ${small
          ? 'py-2 px-4 text-sm font-light border-[1px]'
          : 'py-4 px-8 text-md font-semibold border-2'
        }
      `}
    >
      <div className="flex justify-center items-center gap-2 text-inherit">
        {Icon && ( <Icon className="text-inherit"/> )}
        {children}
      </div>
    </button>
  )
}
