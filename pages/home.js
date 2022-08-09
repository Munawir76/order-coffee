import Head from 'next/head'
import 'antd/dist/antd.css'
import Slide from '../component/landingPage/carousel'
import LandingPage from '../component/landingPage/landingPage '
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MainLayoutUser from '../component/mainLayotUser'

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
        <MainLayoutUser>

            <Head>
                <title>Order Coffee</title>
                <link rel="icon" href="/logo1.ico" />
            </Head>
            <Slide />
            <LandingPage />
        </MainLayoutUser>
    )
}
