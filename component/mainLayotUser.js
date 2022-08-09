import { Layout } from "antd"
import Navigasi from "../component/navigasi"
import Footer from "../component/footer"


export default function MainLayoutUser({ children }) {
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