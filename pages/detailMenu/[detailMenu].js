import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.variable.min.css'
import Link from 'next/link'
import Image from 'next/image';
import { Row, Col, Space, Select, Form, ConfigProvider, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});

const { Option } = Select

export default function DetailMenu() {

    const [dataDetailProduct, setDataDetailProduct] = useState([])
    const [dataPromo, setDataPromo] = useState([])

    //Request Cart
    const [idMenu, setIdMenu] = useState('')
    const [amount, setAmount] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [idPromo, setIdPromo] = useState('')
    const [finalPrice, setFinalPrice] = useState()
    const [idUser, setIdUser] = useState('')


    const router = useRouter();
    const { detailMenu } = router.query;

    async function getDataDetailProduct() {
        try {
            const getDataDetail = await axios.get(`https://ordercoffee-app.herokuapp.com/menu/${detailMenu}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res.data.data, 'ini res api menu')
                setDataDetailProduct(res.data.data)
                setDataPromo(res.data.data.promo)
                // if (dataDetailProduct) {
                //     setIsDiskon(true)
                // } else {
                //     setIsDiskon(false)
                // }

            })
        } catch (error) {
            console.log(error, 'ini errornya')
        }
    }

    const onFinishAdd = async () => {
        try {
            const sentCart = {
                menu_id: idMenu,
                amount: amount,
                total_price: totalPrice,
                promo_id: idPromo,
                final_price: finalPrice,
                user_id: idUser
            }
            console.log(sentCart, 'ini value sent cart');

            const sentData = await axios.post("https://ordercoffee-app.herokuapp.com/cart", sentCart, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                // console.log(res)
                // message.success("Successfull Create promo")
            })
        } catch (error) {
            // console.log(error, "ini error");
            message.error("failed add product")
        }
    }

    useEffect(() => {
        getDataDetailProduct()
    }, [])


    return (
        <div>
            <div className='h-screen ml-40 mt-10' style={{ position: "relative" }}>
                <Row justify='start' >
                    <Col span='8'>
                        <Image src={`https://ordercoffee-app.herokuapp.com/menu/image/${dataDetailProduct.photo}`}
                            unoptimized={true}
                            width={350}
                            height={350}
                            style={{ borderRadius: 10 }} />

                    </Col>
                    <Col style={{ textAlign: 'start', marginLeft: 20 }} span='8'>
                        <h2 className="font-bold text-2xl text-[#805336]">{dataDetailProduct.name}</h2>
                        <h2 className="font-semibold text-xl mt-5 text-gray-500">Rp. {dataDetailProduct.price}</h2>
                        <Row className="font-medium text-2xl mt-2">
                            <Col>
                                {dataPromo.map((data) => {
                                    return (
                                        <>
                                            <h3 className='text-black'>Diskon {data.discount}</h3><Space className="font-extrabold text-[#805336] ml-2"></Space>
                                        </>
                                    )
                                })
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row justify='start'>
                    <Col span='8'>
                        <h2 className="font-medium text-2xl mt-2">Deskripsi</h2>
                        <p className="font-normal text-base mt-5">{dataDetailProduct.description}</p>
                    </Col>
                    <Col span={8}>
                        <Form>
                            <div className="flex justify-center ml-4">
                                <Form.Item name='status'>
                                    <h3 className="text-base text-center">Quantity</h3>
                                    <Select
                                        className='hover: bg-[#805336] active:bg-[#805336]'
                                        placeholder="Masukan jumlah menu"
                                        style={{
                                            width: 115,
                                            borderBlockColor: "rgba(140, 79, 5, 0.8)"
                                        }}

                                    >
                                        <Option value="1" >1</Option>
                                        <Option value='2'>2</Option>
                                        <Option value="3" >3</Option>
                                        <Option value='4'>4</Option>
                                        <Option value='5'>5</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-10 mr-2" span='8'>
                        <a href='/menu' className='text-[#805336] text-base font-semibold font text-decoration: underline hover:text-black'> Back to menu</a>
                    </Col>
                    <Col className="mt-4 ml-32 mb-10" span='8'>
                        {/* <Link href=''> */}
                        <button
                            onClick={onFinishAdd}
                            type="button"
                            className=" space-x-2 justify-end inline-block px-6 py-2 bg-[#C78342] text-white font-medium text-xs leading-tight shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                        >
                            {<ShoppingCartOutlined className='mr-2 mb-2' />}<Space className="font-medium">+ Add to cart</Space>
                        </button>
                        {/* </Link> */}
                    </Col>
                </Row>
            </div>
            {/* )
            })} */}

        </div>
    )
}