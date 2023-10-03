import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function ServerPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }

  return (
    <main>
      <span>
        This is a server page with authentication directly configured into it
      </span>
      <br />
      <span>
        <strong>User:</strong> {session?.user?.name}
      </span>
    </main>
  )
}
