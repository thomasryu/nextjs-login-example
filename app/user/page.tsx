import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function UserPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/user')
  }

  return <span>Hello {session?.user?.name}</span>
}
