"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { FileInput, Button, Spinner, Invoice } from "@/components"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export const Form = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [file, setFile] = useState<File>()
  const [isLoading, setIsLoading] = useState(false)
  const [invoice, setInvoice] = useState<Invoice>({} as Invoice)

  async function handleFileSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!file)  return toast("Please upload a file first")

    if (!session) return router.push('/api/auth/signin')
    
    try {
      setIsLoading(true)

      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + '/invoice/upload', {
        method: 'POST',
        body: formData,
        headers: { Authorization: `Bearer ${session.accessToken}` }
      })

      const data: Invoice = await res.json()
      setInvoice(data)
      
    } catch (error: any) {
      if (error.statusCode === 401) {
        toast.error("Login expired, please sign in again")
        return router.push('/api/auth/signin')
      }

      return toast.error(error.message)
    
    } finally {
      setIsLoading(false)
      return toast.success("Invoice Added Successfully!")
    }
  }

  async function handleEditSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!session) return router.push('/api/auth/signin')
    
    try {
      setIsLoading(true)

      const res = await fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + '/invoice', {
        method: 'PATCH',
        body: JSON.stringify(invoice),
        headers: { Authorization: `Bearer ${session.accessToken}` }
      })

      const data: Invoice = await res.json()
      setInvoice(data)
      
    } catch (error: any) {
      if (error.statusCode === 401) {
        toast.error("Login expired, please sign in again")
        return router.push('/api/auth/signin')
      }

      return toast.error(error.message)
    
    } finally {
      setIsLoading(false)
      return toast.success("Invoice Edited Successfully!")
    }
  }
  
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    setFile(e.target.files[0])
  }

  function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setInvoice((prev) => {
      return {
        ...prev,
        extractedText: e.target.value
      }
    })    
  }

  return (
    <>
      <form 
        onSubmit={handleFileSubmit}
        className="flex flex-col gap-4 w-full"
      >
        <FileInput 
          name="file"
          accept=".jpg, .jpeg, .png, .pdf"
          onChange={handleFileChange}
        />
        {isLoading && <Spinner />}
        <pre className="text-center">{file?.name}</pre>
        <Button
          type="submit" 
          buttonStyles="flex mx-auto"
        >
          Upload File
        </Button>
      </form>

      <form 
        onSubmit={handleEditSubmit}
        className="w-full py-12"
      >
        <h3 className="title py-6 text-center">Extracted Text</h3>
          <textarea 
            value={invoice.extractedText} 
            onChange={handleTextChange}
            disabled={invoice.extractedText?.length === 0} 
            className="my-4 p-2 w-full h-[250px] text-white bg-transparent border border-white"
          />
        <Button 
          disabled={invoice.extractedText?.length === 0} 
          type="submit"
          buttonStyles="flex mx-auto"
        >
          Save Changes
        </Button>
      </form>
    </>
  )
}
