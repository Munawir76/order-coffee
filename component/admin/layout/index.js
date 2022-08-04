import React from "react";
import { Layout } from "antd";
import NavbarAdmin from "./header";
import Sidebar from "./sidebar";
import 'antd/dist/antd.variable.css'
import 'tailwindcss/tailwind.css'

const { Footer } = Layout


function MainLayout({ children }) {
    return (
        <Layout>
            <NavbarAdmin />
            <Layout>
                <Sidebar />
                <Layout>{children}

                    <Footer
                        className="text-center"
                        style={{
                            backgroundColor: "white",
                            width: "100%"
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
