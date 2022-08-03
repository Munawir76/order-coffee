import Navigasi from '../component/navigasi'
import Footer from '../component/footer'
import ListCart from '../component/cart/listCart'
// import CartAuth from '../component/cart/cartAuth'

export default function Beranda() {
    return (
        <div>
            {/* <CartAuth /> */}
            <Navigasi />
            <ListCart />
            <Footer />
        </div>
    )
}
