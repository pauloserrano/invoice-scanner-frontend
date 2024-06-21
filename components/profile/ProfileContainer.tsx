import { getSession } from '@/actions/getCurrentUser'
import { MdConstruction } from 'react-icons/md'

export const ProfileContainer = async () => {
  const session = await getSession()

  return (
    <section className='section container flex flex-col gap-4 justify-center items-center'>
      <MdConstruction size={64} />
      <p className='text-2xl'>Nothing to see here yet...</p>
    </section>
  )
}
