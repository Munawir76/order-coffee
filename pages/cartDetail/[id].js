import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import MainLayoutUser from '../../component/mainLayotUser'
import { Row, Col, Card, Input, ConfigProvider, Upload, Button, message } from 'antd'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Router, { useRouter } from 'next/router'
import { UploadOutlined } from '@ant-design/icons';
import jwt_decode from 'jwt-decode'
import menuSatu from '../../public/images/kopisusu.jpg'
import menuDua from '../../public/images/vietnamdrip.jpg'



ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});

export default function CartAuth() {

    const [cartToPay, setCartToPay] = useState([])

    const [sentImage, setSentImage] = useState()

    const router = useRouter();
    const { id } = router.query;
    // console.log(id, 'ini id')

    async function getCartToPay() {
        try {
            const getToken = localStorage.getItem("tokenCustomer")
            const decode = jwt_decode(getToken)
            await axios.get(`https://ordercoffee-app.herokuapp.com/users/${decode?.id}`, {
                headers: {
                    "Content-Type": 'application/json   ',
                }
            }).then(res => {
                console.log(res, 'ini res cart to pay')
                setCartToPay(res.data.data.transactionDetail)
            })
        } catch (error) {

        }
    }

    const onChangeBuktiTrf = (e) => {
        // const value = e.target.files
        console.log(e, " ini files nya")
        setSentImage(e.file.originFileObj)
        const dataImage = new FormData
        dataImage.append('image', e.file.originFileObj)
        axios.put(`https://ordercoffee-app.herokuapp.com/transaction/payment/${id}`, dataImage, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res, 'ini res image');
            message.success('Berhasil Upload')
        })
    }

    async function payment() {
        try {
            const sentPayment = {

                status: 'Menunggu Pengecekan',
                // image: sentImage,

            }
            // console.log(sentPayment, 'ini data sent paymen');
            await axios.put(`https://ordercoffee-app.herokuapp.com/transaction/edit/${id}`, sentPayment, {
                headers: {
                    "Content-Type": 'application/json   ',
                }
            }).then(res => {
                console.log(res, 'ini res put')
                message.success('Pembayaran Terkirim')
                setTimeout(() => {
                    message.info("Anda akan di arahkan ke halaman transaksi history")
                    Router.back()
                }, 2000);
            })
        } catch (error) {
            console.error(error, 'ini error')

        }
    }



    useEffect(() => {
        getCartToPay()
    }, [])

    return (
        <div>
            <MainLayoutUser>
                <div className='min-h-screen pt-14 mt-5' style={{ position: "relative" }}>
                    <Row justify='center' flex className="gap-56 mr-20">
                        <Col span={9}>
                            <Row flex justify='start' className=''>
                                <Col className="text-start">
                                    <Card style={{ width: 500, height: 520, borderColor: "rgba(192, 103, 17, 0.8)", marginLeft: 150, marginTop: 10, }}>
                                        <h2 className="text-center text-[#C78342] font-bold">Transfer ke no Rekening berikut</h2>
                                        <div className="space-y-5 mt-5">
                                            <Input placeholder="Rek BCA" disabled={true} />
                                            <Input placeholder="577-778-89" disabled={true} />
                                            <Input placeholder="Rek Mandiri" disabled={true} />
                                            <Input placeholder="12-8890-0092-989-00" disabled={true} />
                                        </div>
                                        <div className="mt-6">
                                            <h3 className="text-center text-[#C78342] font-bold">Upload Bukti Pembayaran</h3>
                                            <div style={{ marginTop: 10 }} className="justify-center flex">
                                                <Upload onChange={onChangeBuktiTrf} listType='picture' multiple={false}>
                                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                </Upload>
                                            </div>
                                            <button
                                                type="button"
                                                className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-96 h-10 mt-5 ml-8 mb-3"
                                                onClick={payment}
                                            >
                                                Bayar
                                            </button>
                                            <a href="/cart/" className="hover:text-[#805336] text-decoration: underline text-[#805336] text-base font-semibold mt-5 ml-44" > Back to Menu</a>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                        </Col>
                        <Col span={9} className='mt-2'>
                            <Card style={{ width: 500, height: 520, backgroundColor: 'rgba(238, 238, 238, 0.8)', position: 'relative' }}>
                                {/* {cartToPay?.map((data) => {
                                    return (
                                        <> */}
                                <Row >
                                    <Col span={12}>
                                        <Image src={menuSatu} width={100} height={100}></Image>
                                        {/* <Image src={`https://ordercoffee-app.herokuapp.com/menu/image/${data?.menu?.photo}`}
                                                        unoptimized={true}
                                                        width={150}
                                                        height={150}
                                                        style={{ borderRadius: 10 }} /> */}
                                    </Col>
                                    <Col span={12}>
                                        {/* <h2 className="text-xl font-semibold">{data?.menu?.name}</h2>
                                                    <h2 className="text-xl font-bold mt-4">Rp. {data?.price}</h2> */}
                                        <h2 className="text-lg font-semibold">Kopi Susu</h2>
                                        <h2 className="text-lg font-normal mt-4">Rp. 30.000.00</h2>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col span={12}>
                                        <Image src={menuDua} width={100} height={100}></Image>
                                    </Col>
                                    <Col span={12}>
                                        <h2 className="text-lg font-semibold">Vietnam Drip</h2>
                                        <h2 className="text-lg font-normal mt-4">Rp. 40.000.00</h2>
                                    </Col>
                                </Row>
                                <Row className='mt-28'>
                                    <Col span={12}>
                                        {/* <h1 >Subtotal</h1> */}
                                    </Col>
                                    <Col span={12}>
                                        {/* <h2 className="text-base font-semibold">Rp. {data?.price}</h2> */}
                                        {/* <h2 className="text-base font-semibold">Rp. 70.000.00</h2> */}
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col span={12}>
                                        <h1 className="text-base font-semibold">Total</h1>
                                    </Col>
                                    <Col span={12}>
                                        {/* <h2 className="text-base font-bold">Rp. {data?.totalPrice}</h2> */}
                                        <h2 className="text-base font-bold">Rp. 70.000.00</h2>
                                    </Col>
                                </Row>
                                {/* </>
                                    )
                                })} */}


                            </Card>
                            <Row className='mt-4'>

                            </Row>
                        </Col>
                    </Row>
                </div>
            </MainLayoutUser>
        </div>

    )
}
