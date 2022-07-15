import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css'
import Navigasi from './component/navbardua'
import Slide from './component/carousel'
import dynamic from 'next/dynamic'
import Footer from './component/footer'

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
