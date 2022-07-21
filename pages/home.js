import Head from 'next/head'
import 'antd/dist/antd.css'
import Navigasi from './component/landingPage/navigasi'
import Slide from './component/landingPage/carousel'
import Footer from './component/landingPage/footer'

export default function Beranda() {
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
