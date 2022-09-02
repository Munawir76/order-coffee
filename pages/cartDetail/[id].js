import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import MainLayoutUser from '../../component/mainLayotUser'
import { Row, Col, Card, Input, ConfigProvider, Upload, Button, message } from 'antd'
import Image from 'next/image'
import Product1 from '../../public/images/kopisusu.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import SkeletonImage from 'antd/lib/skeleton/Image'
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input

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
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction/detail/${id}`, {
                headers: {
                    "Content-Type": 'application/json   ',
                }
            }).then(res => {
                console.log(res.data.data, 'ini res cart to pay')
                setCartToPay(res.data.data.user.cart)
            })
        } catch (error) {

        }
    }

    const onChangeBuktiTrf = (e) => {
        // const value = e.target.files
        console.log(e, " ini files nya")
        setSentImage(e.file.originFileObj)
    }

    async function payment() {
        try {
            const sentPayment = {

                status: 'Menunggu Pengecekan',
                image: sentImage,

            }
            // console.log(sentPayment, 'ini data sent paymen');
            await axios.put(`https://ordercoffee-app.herokuapp.com/transaction/edit/${id}`, sentPayment, {
                headers: {
                    "Content-Type": 'application/json   ',
                }
            }).then(res => {
                console.log(res, 'ini res put')
                message.success('Succesfull')
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        getCartToPay()
    }, [])

    return (
        <div>
            <MainLayoutUser>
                <div className='min-h-screen pt-14 mt-5' style={{ position: "relative" }}>
                    <Row justify='center' flex className="gap-56">
                        <Col span={10}>
                            {/* <Row className="">
                                <Col span={12}>
                                    <h2>Name</h2>
                                </Col>
                            </Row>
                            <Row >
                                <Col >
                                    <TextArea rows={1} cols={48} placeholder="Input your name" className='mt-2' />
                                </Col>
                            </Row>
                            <Row className="mt-6">
                                <Col >
                                    <TextArea rows={4} cols={48} placeholder="Deskripsi" maxLength={6} />
                                </Col>
                            </Row> */}
                            <Row flex justify='start' className=''>
                                <Col className="text-start">
                                    <Card style={{ width: 300, height: 500, borderColor: "rgba(192, 103, 17, 0.8)", marginLeft: 150, marginTop: 10, }}>
                                        <h2 className="text-center text-[#C78342] font-bold">Transfer ke no Rekening berikut</h2>
                                        <div className="space-y-5 mt-5">
                                            <Input placeholder="Rek BCA" disabled={true} />
                                            <Input placeholder="577-778-89" disabled={true} />
                                            <Input placeholder="Rek Mandiri" disabled={true} />
                                            <Input placeholder="12-8890-0092-989-00" disabled={true} />
                                        </div>
                                        <button
                                            type="button"
                                            className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-60 h-8 ml-1 mt-16"
                                        >
                                            Menunggu konfirmasi Admin
                                        </button>
                                        <div className="mt-10">
                                            <h3 className="text-center text-[#C78342] font-bold">Upload Bukti Pembayaran</h3>
                                            <div style={{ marginTop: 6 }}>
                                                <Upload onChange={onChangeBuktiTrf} listType='picture' multiple={false}>
                                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                </Upload>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                                <Col>

                                </Col>
                            </Row>
                            <Row className="pt-4 justify-center">
                                <Col>
                                    <a href="/cart/" className="hover:text-[#805336] text-decoration: underline text-[#805336] text-base font-semibold" > Back to Cart</a>

                                </Col>
                            </Row>
                        </Col>
                        <Col span={10}>
                            <Card style={{ width: 500, height: 520, backgroundColor: 'rgba(238, 238, 238, 0.8)', }}>
                                {cartToPay?.map((data) => {
                                    return (
                                        <>
                                            <Row >
                                                <Col span={12}>
                                                    <Image src={`https://ordercoffee-app.herokuapp.com/menu/image/${data?.menu?.photo}`}
                                                        unoptimized={true}
                                                        width={150}
                                                        height={150}
                                                        style={{ borderRadius: 10 }} />
                                                </Col>

                                                <Col span={12}>
                                                    <h2 className="text-xl font-semibold">{data?.menu?.name}</h2>
                                                    <h2 className="text-xl font-bold mt-4">Rp. {data?.price}</h2>
                                                </Col>
                                            </Row>
                                            <Row className='mt-28'>
                                                <Col span={12}>
                                                    <h1 >Subtotal</h1>
                                                </Col>
                                                <Col span={12}>
                                                    <h2 className="text-base font-semibold">Rp. {data?.price}</h2>
                                                </Col>
                                            </Row>
                                            <Row className="mt-16">
                                                <Col span={12}>
                                                    <h1 className="text-base font-semibold">Total</h1>
                                                </Col>
                                                <Col span={12}>
                                                    <h2 className="text-base font-bold">Rp. {data?.totalPrice}</h2>
                                                </Col>
                                            </Row>
                                        </>
                                    )
                                })}


                            </Card>
                            <Row className='mt-4'>
                                {/* <Link href='/payment/'> */}
                                <button
                                    type="button"
                                    className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-32 h-10 ml-36"
                                    onClick={payment}
                                >
                                    PAY
                                </button>
                                {/* </Link> */}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </MainLayoutUser>
        </div>

    )
}
