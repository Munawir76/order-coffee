import { Layout } from "antd"
import Navigasi from "../component/navigasi"
import Footer from "../component/footer"
import { message } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function MainLayoutUser({ children }) {

    const router = useRouter()
    useEffect(() => {
        // const getToken = localStorage.getItem('tokenCustomer')

        // if (!getToken) {
        //     message.info('Anda harus login dahulu')
        //     router.push('/')
        // }


    }, [])


    return (
        <Layout >
            <Navigasi />
            <Layout style={{ backgroundColor: "white" }}>
                {children}
            </Layout>
            <Layout>
                <Footer />
            </Layout>
        </Layout>
    )
}