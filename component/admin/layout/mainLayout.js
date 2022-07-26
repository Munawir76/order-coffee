import React from "react";
import { Layout, ConfigProvider } from "antd";
import NavbarAdmin from "./layoutHeader";
import Sidebar from "./layoutSider";
import 'antd/dist/antd.variable.css'
import 'tailwindcss/tailwind.css'

const { Footer } = Layout
ConfigProvider.config({
    theme: {
        primaryColor: 'blue-500',
    },
});
function MainLayout({ children }) {
    return (
        <Layout
            hasSider
        >
            <Sidebar />
            <Layout>
                <NavbarAdmin />
                <Layout>{children}

                    <Footer
                        className="text-center"
                        style={{
                            backgroundColor: "white",

                            width: "100%"
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>


            </Layout>
        </Layout >
    );
}

export default MainLayout;
