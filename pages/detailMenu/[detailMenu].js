import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.variable.min.css'
import Link from 'next/link'
import Image from 'next/image';
import MainLayoutUser from '../../component/mainLayotUser'
import { Row, Col, Space, Select, Form, ConfigProvider, message, InputNumber, Typography, Collapse, Tooltip, Card } from 'antd';
import { ShoppingCartOutlined, ExclamationCircleTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { data } from 'autoprefixer';


ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});

const { Text } = Typography;
const { Panel } = Collapse;

export default function DetailMenu() {

    const [dataProduct, setDataProduct] = useState([])
    const [dataDetailProduct, setDataDetailProduct] = useState()
    const [dataPromo, setDataPromo] = useState([])
    const [statusProduct, setStatusProduct] = useState("")

    //Request Cart
    const [idMenu, setIdMenu] = useState('')
    const [amount, setAmount] = useState()
    // const [totalPrice, setTotalPrice] = useState()
    const [idPromo, setIdPromo] = useState('')
    const [idUser, setIdUser] = useState('')
    const [price, setPrice] = useState()


    const router = useRouter();
    const { detailMenu } = router.query;


    function getId() {
        if (localStorage.getItem('tokenCustomer')) {
            const getToken = localStorage.getItem('tokenCustomer')
            const decode = jwt_decode(getToken)
            setIdUser(decode?.id)
        } else if (localStorage.getItem('idGuest')) {
            setIdUser(localStorage.getItem('idGuest'))
        }
    }

    async function getDataDetailProduct() {
        try {
            // const tokenToCart = localStorage.getItem('tokenCustomer')
            // const tokenGuest = localStorage.getItem('tokenGuest')
            // const decode = jwt_decode(tokenToCart)
            // localStorage.getItem('tokenGuest')
            const getDataDetail = await axios.get(`https://ordercoffee-app.herokuapp.com/menu/${detailMenu}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res, 'ini res api menu')
                setDataDetailProduct(res.data.data)
                setStatusProduct(res.data.data.status)
                setIdMenu(res.data.data.id)
                // setIdUser(decode?.id)
                setPrice(res.data.data.price)
                setDataPromo(res.data.data.promo)
                setIdPromo(res.data.data.promo[0].id)
            })

        } catch (error) {
            if (error) {
                console.log(error, 'ini errornya')
            }
        }
    }
    const onFinishAdd = async (props) => {
        try {
            console.log(props);
            if (props == 'Tersedia') {
                const totalPrice = amount * price
                const sentCart = {
                    menu_id: idMenu,
                    amount: amount,
                    price: price,
                    promo_id: idPromo,
                    user_id: idUser,
                    totalPrice: totalPrice
                }
                console.log(sentCart, 'ini value sent cart');

                await axios.post("https://ordercoffee-app.herokuapp.com/cart", sentCart, {
                    headers: {
                        "content-type": 'application/json',
                    }

                }).then(res => {
                    if (res.status == 200 || res.status == 201) {
                        console.log(res, 'ini res post')
                        setTimeout(() => {
                            message.info("Successfull add cart")
                            message.info("Successfull add cart")
                        }, 2000);
                    }

                })
            }
            else if (props == 'Tidak tersedia') {
                message.info('Stok menu kosong')
                message.info('Stok menu kosong')
            }

        } catch (error) {
            if (error) {
                console.log(error, "ini error");
                message.error("Masukan jumalah menu")
                message.error("Masukan jumalah menu")
            }
        }
    }


    async function getDataProduct() {
        try {
            await axios.get('https://ordercoffee-app.herokuapp.com/menu', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data.items)
                setDataProduct(res.data.items)
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getId()
        getDataProduct()
        getDataDetailProduct()
    }, [])


    const OnChangeAmounMenu = (value) => {
        setAmount(value)
        console.log('changed', value);
    };

    function cekStatus(props) {
        if (props == "Tersedia") {
            return (
                <Text type="success" style={{ fontSize: 15 }}>Menu Tersedia</Text>
            )
        }
        else if (props == "Tidak tersedia") {
            return (
                <Space ><Text delete type="danger" style={{ fontSize: 15 }}>Menu kosong </Text><ExclamationCircleOutlined style={{ color: 'rgba(255, 146, 0, 0.8)' }} />pilih menu lain</Space>
            )
        }
    }

    function hargaPromo(props) {
        if (!props?.promo || props?.promo.length == 0) {
            return (
                <h2 className="font-semibold text-xl mt-5 text-black">{rupiah(dataDetailProduct?.price)}</h2>

            )
        } else if (props?.promo) {
            return (
                <Text delete style={{ fontSize: 15, color: 'gray' }}>{rupiah(dataDetailProduct?.price)}</Text>
            )

        }
    }

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    return (
        <MainLayoutUser>
            <div className='h-screen ml-40 mt-20' style={{ position: "relative" }}>
                <Row justify='start' >
                    <Col span='8'>
                        <Image src={`https://ordercoffee-app.herokuapp.com/menu/image/${dataDetailProduct?.photo}`}
                            unoptimized={true}
                            width={350}
                            height={350}
                            style={{ borderRadius: 10 }} />
                    </Col>
                    <Col style={{ textAlign: 'start' }} span='6'>
                        <h2 className="font-bold text-2xl text-[#805336]">{dataDetailProduct?.name}</h2>
                        <h3>{hargaPromo(dataDetailProduct)}</h3>
                        <h3>{cekStatus(statusProduct)}</h3>
                        <Row className="font-medium text-2xl mt-2">
                            <Col>
                                {dataPromo.map((data) => {
                                    const hitungDiskon = data?.discount * price
                                    const hasilHitung = price - hitungDiskon
                                    return (
                                        <>
                                            <h3 className='text-black font-bold text-xl'>Diskon {data?.discount.toFixed(2) * 100 + '%'}</h3><Space className="font-extrabold text-[#805336] ml-2"></Space>
                                            <h3 className='text-black font-bold text-xl'>{rupiah(hasilHitung)}</h3>
                                        </>
                                    )
                                })
                                }
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col style={{ textAlign: 'start', }} span='8'>
                        <Collapse>
                            <Panel header="Lihat menu lainnya" >
                                <div className='gap-3 align-middle justify-center flex'>
                                    {dataProduct?.map((data => {
                                        return (
                                            <>
                                                <Tooltip placement='top' title={data?.name}>

                                                    <Image
                                                        src={`https://ordercoffee-app.herokuapp.com/menu/image/${data?.photo}`}
                                                        unoptimized={true}
                                                        width={90}
                                                        height={90}
                                                        style={{ borderRadius: 6 }} />

                                                </Tooltip>
                                            </>
                                        )
                                    }))}
                                </div>
                            </Panel>
                            <Panel header="Lihat promo lainnya">
                                <p>hallo jaloo</p>
                            </Panel>
                            <Panel header="This is panel header 3" key="3">
                                <p>hallo jaloo</p>
                            </Panel>
                        </Collapse>
                    </Col> */}
                </Row>
                <Row justify='start'>
                    <Col span='8'>
                        <h2 className="font-medium text-2xl mt-2">Deskripsi</h2>
                        <p className="font-normal text-base mt-5">{dataDetailProduct?.description}</p>
                    </Col>
                    <Col span={8}>
                        <Form>
                            <div className="flex justify-center ml-4">
                                <Form.Item name='status'>
                                    <h3 className="text-base text-center">Quantity</h3>
                                    <InputNumber min={0} max={10} onChange={OnChangeAmounMenu} value={amount} />
                                </Form.Item>
                            </div>
                        </Form>
                        <button
                            onClick={() => onFinishAdd(statusProduct)}
                            type="button"
                            className=" space-x-2 justify-end inline-block px-6 ml-32 py-2 bg-[#C78342] text-white font-medium text-xs leading-tight shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                        >
                            {<ShoppingCartOutlined className='mr-2 mb-2' />}<Space className="font-medium">+ Add to cart</Space>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-10 mr-2" span='8'>
                        <a href='/menu' className='text-[#805336] text-base font-semibold font text-decoration: underline hover:text-black'> Back to menu</a>
                    </Col>
                    <Col className="mt-4 ml-32 mb-10" span='8'>

                    </Col>
                </Row>
            </div>
        </MainLayoutUser>
    )
}