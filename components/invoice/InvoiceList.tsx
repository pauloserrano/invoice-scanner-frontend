"use client"

import { Session } from 'next-auth'
import { useFetch } from '@/hooks'
import { Invoice } from "@/components"
import { InvoiceItem } from './InvoiceItem'

interface InvoiceListProps {
  session: Session
}

export const InvoiceList = ({ session }: InvoiceListProps) => {
  const { data: invoices, error, mutate } = useFetch<Invoice[]>("/invoice", {
    headers: { Authorization: `Bearer ${session.accessToken}`}
  })

  function onDelete(id: number, callback?: () => any) {
    const updatedInvoices = invoices?.filter((invoice) => invoice.id !== id)
    mutate(updatedInvoices, false)
    
    callback && callback()
  }

  if (!invoices) return (
    <div className="text-center">Loading...</div>
  )
  
  if (error) return (
    <div className="text-center">Failed to fetch data</div>
  )

  if (invoices.length === 0) return (
    <div className="text-center">No invoices found... create your first one at the home page!</div>
  )

  return (
    <div className='flex flex-col xl:flex-row xl:flex-wrap lg:basis-1/2 justify-between gap-12 py-10 xl:py-16 border-t border-white/20'>
      {invoices?.length > 0 && invoices?.map(invoice => (
        <InvoiceItem 
          key={invoice.id} 
          session={session} 
          invoice={invoice} 
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
