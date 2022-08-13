import React from "react";
import { Layout, message } from "antd";
import NavbarAdmin from "./header";
import Sidebar from "./sidebar";
import 'antd/dist/antd.variable.css'
import 'tailwindcss/tailwind.css'
import { useRouter } from "next/router";
import { useEffect } from "react";

const { Footer } = Layout


function MainLayout({ children }) {

    const router = useRouter()
    useEffect(() => {
        const getToken = localStorage.getItem('tokenAdmin')

        if (!getToken) {
            message.info('Anda harus login dahulu')
            router.back()
        }


    }, [])


    return (
        <Layout>
            <NavbarAdmin />
            <Layout>
                <Sidebar />
                <Layout>
                    {children}

                    <Footer
                        className="text-center h-20  "
                        style={{
                            backgroundColor: "white",
                            width: "100%",

                        }}
                    >
                        © 2022 Order Coffe. All right reserved
                    </Footer>
                </Layout>


            </Layout>
        </Layout >
    );
}

export default MainLayout;
