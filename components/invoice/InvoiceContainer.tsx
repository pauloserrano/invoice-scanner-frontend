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
    <div className="section container mx-auto">
      <SectionHeader title="Invoices" />
      {session ? (
        <InvoiceList session={session} />
      ) : (
        <div>Nothing to see here</div>
      )}
    </div>
  )
}
