"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import toast from "react-hot-toast"
import { useModalContext } from "@/hooks/useModalContext"
import { FileInput, Invoice, Button, Spinner } from "@/components"

interface UploadFormProps {
  setInvoice: (invoice: Invoice) => void
}

export const UploadForm = ({ setInvoice }: UploadFormProps) => {
  const { data: session } = useSession()
  const { actions } = useModalContext()
  const [file, setFile] = useState<File>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleFileSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!file) return toast("Please upload a file first")

    if (!session) return actions.openLoginModal()
    
    try {
      setIsLoading(true)

      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + '/invoice/upload', {
        method: 'POST',
        body: formData,
        headers: { Authorization: `Bearer ${session.accessToken}` }
      })

      if (!res?.ok) throw new Error("Something went wrong...") 

      const invoice: Invoice = await res.json()
      setInvoice(invoice)
      
      toast.success("Invoice Added Successfully!")

    } catch (error: any) {
      toast.error(error.message)
    
    } finally {
      setIsLoading(false)
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    setFile(e.target.files[0])
  }

  return (
    <form 
    onSubmit={handleFileSubmit}
    className="flex flex-col gap-4 w-full"
  >
    <FileInput 
      name="file"
      accept=".jpg, .jpeg, .png, .pdf"
      onChange={handleFileChange}
    />

    {isLoading && (
      <div className="mx-auto">
        <Spinner />
      </div>
    )}
    
    <pre className="text-center">{file?.name}</pre>
    
    <Button
      type="submit" 
      buttonStyles={`flex mx-auto`}
      disabled={isLoading}
    >
      Upload File
    </Button>
  </form>
  )
}
