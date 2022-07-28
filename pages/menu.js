import 'antd/dist/antd.css'
import Navigasi from '../component/navigasi'
import ListMenu from '../component/menu/listMenu'
import Footer from '../component/footer'

export default function Beranda() {
    return (
        <div>
            <Navigasi />
            <ListMenu />
            <Footer />
        </div>
    )
}
