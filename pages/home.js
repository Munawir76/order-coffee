import Head from 'next/head'
import 'antd/dist/antd.css'
import Slide from '../component/landingPage/carousel'
import LandingPage from '../component/landingPage/landingPage '
import MainLayoutUser from '../component/mainLayotUser'


export default function Home() {


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
