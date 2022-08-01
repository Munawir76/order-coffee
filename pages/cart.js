import Navigasi from '../component/navigasi'
import Footer from '../component/footer'
import ListCart from '../component/cart/listCart'

export default function Beranda() {
    return (
        <div>
            <Navigasi />
            <ListCart />
            <Footer />
        </div>
    )
}
