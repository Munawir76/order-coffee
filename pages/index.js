import Head from 'next/head'
import 'antd/dist/antd.css'
import Navigasi from '../component/navigasi'
import Slide from '../component/landingPage/carousel'
import Footer from '../component/footer'
import LoginLanding from '../component/landingPage/loginLandingPage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Order Coffee</title>
        <link rel="icon" href="/logo1.ico" />
      </Head>
      <Navigasi />
      <Slide />
      <LoginLanding />
      <Footer />
    </div>
  )
}
