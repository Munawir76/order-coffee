import 'antd/dist/antd.css'
import Navigasi from '../component/navigasi'
import MenuPromo from '../component/promo/menuPromo'
import Footer from '../component/footer'
import MainLayoutUser from '../component/mainLayotUser'

export default function Promo() {
    return (
        <MainLayoutUser>
            <MenuPromo />
        </MainLayoutUser>
    )
}
