import Image from "next/image"

interface AvatarProps {
  src: string
}

export function Avatar({ src }: AvatarProps) {
  if (!src) return

  return (
    <Image 
      alt="avatar"
      height="30"
      width="30"
      className="rounded-full"
      src={src}
    />
  )
}
