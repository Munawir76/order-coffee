import Head from 'next/head'
import 'antd/dist/antd.css'
import Slide from '../component/landingPage/carousel'
import LoginLanding from '../component/landingPage/loginLandingPage'
import MainLayoutUser from '../component/mainLayotUser'
import Navigasi from '../component/navigasi'
import Footer from '../component/footer'

export default function Home() {
  return (
    <>
      <Navigasi />
      <Head>
        <title>Order Coffee</title>
        <link rel="icon" href="/logo1.ico" />
      </Head>
      <Slide />
      <LoginLanding />
      <Footer />
    </>
  )
}
