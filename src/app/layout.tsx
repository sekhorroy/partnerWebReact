import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /**TODO: Configure the main app layout for the app example --> Header, Body, Footer**/
  /**TODO: The responsive design for mobile and web can be written here for the main layout**/


  /** TODO: Layout Page different for each **/

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
