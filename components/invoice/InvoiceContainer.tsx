import { getSession } from "@/actions/getCurrentUser";
import { InvoiceList } from './InvoiceList'
import { SectionHeader } from "../SectionHeader";

export interface Invoice {
  id: number
  userId: number,
  createdAt: string,
  updatedAt: string,
  extractedText: string
}

export const InvoiceContainer = async () => {
  const session = await getSession()

  return (
    <section className="section container mx-auto">
      <SectionHeader title="Invoices" pretitle="Your" />
      {session ? (
        <InvoiceList session={session} />
      ) : (
        <div className="text-center">Please login to see your invoices!</div>
      )}
    </section>
  )
}
