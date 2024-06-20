"use client"
import { NavContext } from "@/contexts/NavContext";
import { useContext } from "react"

export const MenuButton = () => {
  const { setIsOpen } = useContext(NavContext);

  return (
    <div onClick={() => setIsOpen(true)} className="group flex flex-col gap-y-2 cursor-pointer xl:hidden items-end">
      <div className="w-7 h-[2px] bg-white"></div>
      <div className="w-4 group-hover:w-7 h-[2px] bg-white transition-all"></div>
      <div className="w-7 h-[2px] bg-white"></div>
    </div>
  )
}
