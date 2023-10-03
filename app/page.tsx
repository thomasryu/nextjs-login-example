export default function Home() {
  return (
    <main className='flex flex-col'>
      <h1>
        This is an example of a project using <em>next-auth</em>.
      </h1>
      <br />
      <a href='/server' target='_blank' rel='noopener noreferrer'>
        Page with authentication configured directly
      </a>
      <a href='/middleware' target='_blank' rel='noopener noreferrer'>
        Page with authentication configured by middleware
      </a>
      <br />
      <a href='/api/auth/signin'>Sign in</a>
      <a href='/api/auth/signout'>Sign out</a>
    </main>
  )
}
