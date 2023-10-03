// Without a defined matcher, this line applies the login screen to all pages
export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/middleware'],
}
