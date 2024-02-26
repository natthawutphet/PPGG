import '../components/styles/globals.css'
import '../components/styles/css/style.css'
import '../components/styles/css/style1.css'
import '../components/styles/css/style3.css'
import Layout from '../components/Layout'


export default function App({ Component, pageProps }) {
 return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}