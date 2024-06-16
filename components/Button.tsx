"use client"

import { IconType } from "react-icons"

interface ButtonProps {
  outline?: boolean
  small?: boolean
  icon?: IconType
  children: React.ReactNode
  [prop: string]: any
}

export function Button({ icon: Icon, outline, small, children, ...otherProps }: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline 
          ? 'bg-white border-black text-black' 
          : 'bg-rose-500 border-rose-500 text-white'
        }
        ${small
          ? 'py-1 text-sm font-light border-[1px]'
          : 'py-3 text-md font-semibold border-2'
        }
        ${otherProps.className ? otherProps.className : ""}
      `}
    >
      {Icon && ( <Icon size={24} className="absolute left-4 top-3"/> )}
      {children}
    </button>
  )
}
