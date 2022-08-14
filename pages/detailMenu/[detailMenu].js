import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Image from 'next/image';
import MenuSatu from "../../public/images/redvalvet.jpg"
import { Row, Col, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export default function DetailMenu() {

    const [dataDetailProduct, setDataDetailProduct] = useState([])
    // const [dataSelected, setDataSelected] = useState([])

    async function getDataDetailProduct() {
        try {
            const tokenDetailProduct = localStorage.getItem('tokenCustomer')
            const decodeTokenDetail = jwt_decode(tokenDetailProduct)
            const getDataDetail = await axios.get(`https://ordercoffee-app.herokuapp.com/menu/`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res.data.data, 'ini res api')
                setDataDetailProduct(res.data.data[0])

            })
        } catch (error) {
            console.log(error, 'ini errornya')
        }
    }
    useEffect(() => {
        getDataDetailProduct()
    }, [])

    const router = useRouter();
    const { detailMenu } = router.query;
    const dataSelected = dataDetailProduct.find((data) => data.id == detailMenu);
    console.log(dataSelected, 'ini data selected')

    return (
        <div>
            {/* {dataSelected.map((menu) => {
                return ( */}
            <div className='h-screen ml-40 mt-24' style={{ position: "relative" }}>
                <Row justify='start' >
                    <Col span='8'>
                        <Image src={`https://ordercoffee-app.herokuapp.com/menu/image/${dataSelected?.photo}`}
                            unoptimized={true}
                            width={350}
                            height={350}
                            style={{ borderRadius: 10 }} />

                    </Col>
                    <Col style={{ textAlign: 'start', marginLeft: 20 }} span='8'>
                        <h2 className="font-bold text-2xl text-[#805336]">{dataSelected?.name}</h2>
                        <h2 className="font-semibold text-xl mt-5 text-gray-500">Rp. {dataSelected?.price}</h2>
                        <Row className="font-medium text-2xl mt-2">
                            <Col>
                                <p ></p>
                            </Col>
                            <Col>
                                <Space className="font-extrabold text-[#805336] ml-2">Rp. 24.000</Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row justify='start'>
                    <Col span='8'>
                        <h2 className="font-medium text-2xl mt-2">Deskripsi</h2>
                        <p className="font-normal text-base mt-5">{dataSelected?.description}</p>

                        <p>Kopi susu gula aren, terbuat dari bahan-bahan yang fresh.
                            Perpaduan antara Robusta dan Arabica membuat kopi ini
                            sangat nikmat untuk dijadikan teman ngobrol.</p>
                    </Col>
                    <Col span='8'>
                        <div className="flex justify-center">
                            <div className="mb-3 xl:w-20">
                                <label
                                    htmlFor="exampleNumber0"
                                    className="ml-4 -mt-10 text-black font-semibold"
                                >
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    className="
                                        form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-[#805336]
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        ml-2
                                        focus:text-gray-700 focus:bg-white focus:border-[#C78342] focus:outline-[#C78342]
                                        "
                                    id="exampleNumber0"
                                />
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col className="mt-10 mr-2" span='8'>
                        <a href='/menu' className='text-[#805336] text-base font-semibold font text-decoration: underline hover:text-black'> Back to menu</a>
                    </Col>
                    <Col className="-mt-20 ml-32" span='8'>
                        <Link href='/menuDetail/'>
                            <button
                                type="button"
                                className=" space-x-2 justify-end inline-block px-6 py-2 bg-[#C78342] text-white font-medium text-xs leading-tight shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                            >
                                {<ShoppingCartOutlined className='mr-2 mb-2' />}<Space className="font-medium">+ Add to cart</Space>
                            </button>
                        </Link>
                    </Col>
                </Row>
            </div>
            {/* )
            })} */}

        </div>
    )
}