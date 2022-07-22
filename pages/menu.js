import 'antd/dist/antd.css'
import Navigasi from '../component/landingPage/navigasi'
import ListMenu from '../component/menu/listMenu'
import Footer from '../component/landingPage/footer'

export default function Beranda() {
    return (
        <div>
            <Navigasi />
            <ListMenu />
            <Footer />
        </div>
    )
}
