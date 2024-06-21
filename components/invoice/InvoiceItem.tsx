import toast from "react-hot-toast"
import { FaEdit, FaTrash } from "react-icons/fa"
import { Button, Invoice } from "@/components"
import { Session } from "next-auth"
import { useRouter } from "next/navigation"

interface InvoiceItemProps {
  invoice: Invoice
  session: Session
}

export const InvoiceItem = ({ invoice, session }: InvoiceItemProps) => {
  const router = useRouter()

  function formatDate(date: string): string {
    const d = new Date(date)
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  }

  function handleEdit() {
    toast("Feature coming soon!")
  }

  async function handleDelete() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/invoice/${invoice.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
      })

      if (!res.ok) throw new Error("Something went wrong...")
        
      toast.success("Invoice deleted successfully!")
      
    } catch (error) {
     return console.error(error) 
    }
  }

  return (
    <div key={invoice.id} className='flex-1 lg:basis-2/5'>
      <div className='text-accent font-bold mb-1'>{formatDate(invoice.createdAt)}</div>
      <div className='text-xl font-medium mb-4'>New Invoice</div>
      <div className='text-white/70 mb-6 font-light'>{invoice.extractedText}</div>
      <div className="flex gap-4">
        <Button 
          className="className='flex items-center gap-x-2 group"
          onClick={handleEdit}
          icon={FaEdit}
          small
          outline
        >
          Edit
        </Button>
        <Button 
          className="className='flex items-center gap-x-2 group"
          buttonStyles="border-rose-400 text-rose-400"
          onClick={handleDelete}
          icon={FaTrash}
          small
          outline
        >
          Delete
        </Button>
      </div>
    </div>
  )
}
