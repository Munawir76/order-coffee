import Head from 'next/head'
import 'antd/dist/antd.css'
import Navigasi from './component/landingPage/navigasi'
import Slide from './component/landingPage/carousel'
import dynamic from 'next/dynamic'
import Footer from './component/landingPage/footer'


const DynamicHeader = dynamic(() => import('tw-elements'), {
  ssr: false,
})


export default function Home() {
  return (
    <div>
      <Head>
        <title>Order Coffee</title>
        <link rel="icon" href="/logo1.ico" />

      </Head>

      <Navigasi />
      <Slide />
      <Footer />



    </div>
  )
}
