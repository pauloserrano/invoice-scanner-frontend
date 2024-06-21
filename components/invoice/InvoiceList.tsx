"use client"

import { useFetch } from '@/hooks'
import { Invoice } from './InvoiceContainer'
import { Session } from 'next-auth'
import Link from 'next/link'
import { Button } from '../Button'
import { FaEdit } from 'react-icons/fa'

interface InvoiceListProps {
  session: Session
}

export const InvoiceList = ({ session }: InvoiceListProps) => {
  const { data: invoices, error } = useFetch<Invoice[]>("/invoice", {
    headers: { Authorization: `Bearer ${session.accessToken}`}
  })

  function formatDate(date: string): string {
    const d = new Date(date)
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  }

  if (!invoices) return (
    <div className="text-center">Loading...</div>
  )
  
  if (error) return (
    <div className="text-center">Failed to fetch data</div>
  )

  if (invoices.length === 0) return (
    <div className="text-center">No invoices found... create your first one in the home page!</div>
  )

  return (
    <div className='flex flex-col xl:flex-row xl:flex-wrap lg:basis-1/2 justify-between gap-12 py-10 xl:py-16 border-t border-white/20'>
      {invoices?.length > 0 && invoices?.map(invoice => (
        <div key={invoice.id} className='flex-1 lg:basis-2/5'>
          <div className='text-accent font-bold mb-1'>{formatDate(invoice.createdAt)}</div>
          <div className='text-xl font-medium mb-4'>New Invoice</div>
          <div className='text-white/70 mb-6 font-light'>Extracted Text: {invoice.extractedText}</div>
          <Link href="#" className='flex items-center gap-x-2 group'>
            <Button small outline icon={FaEdit}>Edit Invoice</Button>
          </Link>
        </div>
      ))}
    </div>
  )
}
