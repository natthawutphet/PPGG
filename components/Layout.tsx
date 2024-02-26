

import Footer from './Footer'
import Head from 'next/head'
 
export default function Layout({ children }) {
  return (
    <>
    <Head>

      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

    </Head>
    


      <main>{children}</main>



      <Footer />
     

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  )
}