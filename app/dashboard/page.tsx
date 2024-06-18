import { getSession } from '@/actions/getCurrentUser'

interface IInvoice {
  id: number
  extractedText: string
}

export default async function Dashboard() {
  const session = await getSession()

  if (session) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_BASE_URL}/invoice`, {
      headers: { Authorization: `Bearer ${session?.accessToken}` },
    })

    const invoices: IInvoice[] = await res.json()

    return (
      <div>
        {invoices.map(invoice => (
          <div key={invoice.id}>
            <div>{invoice.id}</div>
            <div>{invoice.extractedText}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>Dashboard</div>
  )
}