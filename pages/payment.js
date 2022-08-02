import Navigasi from '../component/navigasi'
import Footer from '../component/footer'
import AuthPayment from '../component/payment/authPayment'
import DonePayment from '../component/payment/donePayment'

export default function Beranda() {
    return (
        <div>
            {/* <Navigasi />
            <AuthPayment />
            <Footer /> */}
            <DonePayment />
        </div>
    )
}
