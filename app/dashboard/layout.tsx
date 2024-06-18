import Link from 'next/link'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-12'>
      <div className='border-r shadow'>
        <Link 
          href={`/dashboard/user`}
          className='p-4'
        >
          User Profile
        </Link>
      </div>
      <div className='col-span-4'>
        {children}
      </div>
    </div>
  )
}
