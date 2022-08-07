import Head from 'next/head'
import 'antd/dist/antd.css'
import Navigasi from '../component/navigasi'
import Slide from '../component/landingPage/carousel'
import Footer from '../component/footer'
import LandingPage from '../component/landingPage/landingPage '
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

    const router = useRouter()
    useEffect(() => {
        const getToken = localStorage.getItem('tokenCustomer')

        if (!getToken) {
            window.alert("Harus Login terlebih dahulu")
            router.push("/")
        }


    }, [])

    return (
        <div>
            <Head>
                <title>Order Coffee</title>
                <link rel="icon" href="/logo1.ico" />
            </Head>
            <Navigasi />
            <Slide />
            <LandingPage />
            <Footer />
        </div>
    )
}
