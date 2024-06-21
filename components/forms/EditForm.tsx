"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Invoice, Button } from "@/components"

interface EditFormProps {
  invoice: Invoice
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>
}

export const EditForm = ({ invoice, setInvoice }: EditFormProps) => {
  const router = useRouter()
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleEditSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!session) return router.push('/api/auth/signin')
    
    try {
      setIsLoading(true)

      const res = await fetch(process.env.NEXT_PUBLIC_DB_BASE_URL + '/invoice', {
        method: 'PATCH',
        body: JSON.stringify(invoice),
        headers: { Authorization: `Bearer ${session.accessToken}` }
      })

      if (!res?.ok) {
        throw new Error("Something went wrong...")
      }

      const data: Invoice = await res.json()
      setInvoice(data)

      toast.success("Invoice Edited Successfully!")
      
    } catch (error: any) {
      toast.error(error.message)
    
    } finally {
      setIsLoading(false)
    }
  }

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInvoice((prev) => {
      return {
        ...prev,
        extractedText: e.target.value
      }
    })    
  }

  return (
    <form 
    onSubmit={handleEditSubmit}
    className="w-full py-12"
  >
    <h3 className="title py-6 text-center">Extracted Text</h3>
      <textarea 
        value={invoice.extractedText} 
        onChange={handleTextChange}
        disabled={isLoading || !invoice.extractedText} 
        className={`
          my-4 p-2 w-full h-[250px] text-white bg-transparent border
          ${!invoice.extractedText ? "border-white/50 cursor-not-allowed" : "border-white"}
        `}
      />
    <Button 
      disabled={isLoading || !invoice.extractedText} 
      type="submit"
      buttonStyles="flex mx-auto"
    >
      Save Changes
    </Button>
  </form>
  )
}
