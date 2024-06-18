"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { FileInput, Button, Spinner } from "@/components"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export const Form = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [file, setFile] = useState<File>()
  const [isLoading, setIsLoading] = useState(false)
  const [extractedText, setExtractedText] = useState<string>("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!file) {
      // TODO Add Warning Toast
      alert("No file uploaded")
      return
    }

    if (!session) {
      router.push('/api/auth/signin')
      return
    }
    
    try {
      setIsLoading(true)

      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + '/invoice/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${session.accessToken}`},
        body: formData
      })

      const data = await res.json()
      
      setExtractedText(data.extractedText)
      
    } catch (error) {
      console.error(error)
    
    } finally {
      setIsLoading(false)
    }
  }
  
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    setFile(e.target.files[0])
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full"
      >
        <FileInput 
          name="file"
          accept=".jpg, .jpeg, .png, .pdf"
          onChange={handleChange}
        />
        {isLoading && <Spinner />}
        <pre className="text-center">{file?.name}</pre>
        <Button label="Submit" type="submit">Submit</Button>
      </form>

      <div className="w-full">
        <h3 className="title py-6 text-center">Extracted Text</h3>
          <textarea 
            value={extractedText} 
            onChange={e => setExtractedText(e.target.value)}
            className="my-4 p-2 w-full h-[250px] text-white bg-transparent border border-white"
          />
      </div>
    </>
  )
}
