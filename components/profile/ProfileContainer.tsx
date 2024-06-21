import { MdConstruction } from 'react-icons/md'
import { SectionHeader } from '@/components'

export const ProfileContainer = async () => {
  return (
    <section className='section container mx-auto flex flex-col gap-4 justify-center items-center'>
      <SectionHeader title='Profile' pretitle='User' />
      <MdConstruction size={64} />
      <p className='text-2xl'>Nothing to see here yet...</p>
    </section>
  )
}
