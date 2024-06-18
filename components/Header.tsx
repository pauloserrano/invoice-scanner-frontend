import { SignInButton, Nav } from "@/components"

interface HeaderProps {
  currentUser: any
}

export const Header = ({ currentUser }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-12 px-4 w-full h-[50px] bg-rose-600 sticky top-0 z-10">
      <h1 className="font-alexBrush text-[32px]">Logo</h1>
      <Nav />
      <SignInButton currentUser={currentUser} />
    </header>
  )
}
