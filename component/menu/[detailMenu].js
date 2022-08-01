import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
// import { useRouter } from "next/router";
import Image from 'next/image';
import Navigasi from "../navigasi"
import Footer from '../footer';
import MenuSatu from "../../public/images/redvalvet.jpg"
import { Row, Col, Space, InputNumber, Button, } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


// const router = useRouter();
// const { name } = router.query;
// const dataSelected = data.find((data) => data.name == name);
export default function DetailMenu() {
    const onChange = (value) => {
        console.log('changed', value);
    };
    return (
        <div>
            <Navigasi />
            <div className='h-screen ml-40 mt-24' style={{ position: "relative" }}>
                <Row justify='start' >
                    <Col span='8'>
                        <Image src={MenuSatu} height={350} width={350} />

                    </Col>
                    <Col style={{ textAlign: 'start', marginLeft: 20 }} span='8'>
                        <h2 className="font-bold text-2xl text-[#805336]">Kopi Susu Gula Aren</h2>
                        <h2 className="font-semibold text-xl mt-5 text-gray-500">Rp. 30.000</h2>
                        <p className="font-medium text-2xl mt-2">Diskon 20% <Space className="font-extrabold text-[#805336] ml-2">Rp. 24.000</Space></p>

                    </Col>
                </Row>
                <Row justify='start'>
                    <Col span='8'>
                        <h2 className="font-medium text-2xl mt-2">Deskripsi</h2>
                        <p className="font-normal text-base mt-5">Kopi susu gula aren, terbuat dari bahan-bahan yang fresh.
                            Perpaduan antara Robusta dan Arabica membuat kopi ini
                            sangat nikmat untuk dijadikan teman ngobrol.</p>
                    </Col>
                    <Col span='8'>
                        <InputNumber className='mt-10 ml-40 border-[#805336] border-2 hover:text-black hover:border-[#805336]' min={1} max={10} defaultValue={3} onChange={onChange} />
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-10 mr-2" span='8'>
                        <a href='/menu' className='text-[#805336] text-base font-semibold font text-decoration: underline hover:text-black'> Back to menu</a>
                    </Col>
                    <Col className="-mt-10 ml-32" span='8'>
                        <Button type="primary" className='border-[#805336] border-2 hover:text-black hover:border-[#805336] hover:bg-[#C78342] text-white bg-[#805336]'>{<ShoppingCartOutlined className='mr-2 mb-2' />}<Space>+ Add to cart</Space>
                        </Button>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}