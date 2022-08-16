import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.variable.min.css'
import Link from 'next/link'
import Image from 'next/image';
import { Row, Col, Space, Select, Form, ConfigProvider } from 'antd';
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
    // const [dataSelected, setDataSelected] = useState([])

    async function getDataDetailProduct() {
        try {
            // const tokenDetailProduct = localStorage.getItem('tokenCustomer')
            // const decodeTokenDetail = jwt_decode(tokenDetailProduct)
            const getDataDetail = await axios.get(`https://ordercoffee-app.herokuapp.com/menu/`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res.data.data, 'ini res api')
                setDataDetailProduct(res.data.items)

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
            <div className='h-screen ml-40 mt-10' style={{ position: "relative" }}>
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
                                <Space className="font-extrabold text-[#805336] ml-2">Disini jumlah potongan diskon</Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row justify='start'>
                    <Col span='8'>
                        <h2 className="font-medium text-2xl mt-2">Deskripsi</h2>
                        <p className="font-normal text-base mt-5">{dataSelected?.description}</p>
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
                                    // onChange={onChangeStatusProduct}
                                    // value={statusProduct}
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