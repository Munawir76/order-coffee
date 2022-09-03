import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col, Steps, Table, Button, Space, ConfigProvider, Modal, message, Empty } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';


export default function ListCart() {

    ConfigProvider.config({
        theme: {
            primaryColor: '#C78342',
        },
    });

    // get cart
    const [dataCart, setDataCart] = useState([])
    const [userId, setUserId] = useState('')
    const [keranjang, setKeranjang] = useState([])
    //delete
    const [deleteId, setDeleteId] = useState()
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const router = useRouter()
    // const [isData, setIsData] = useState(true)
    // const [subTotal, setSubTotal] = useState()

    async function getDataCart() {
        try {
            const tokenToCart = localStorage.getItem('tokenCustomer')
            const decode = jwt_decode(tokenToCart)
            console.log(decode, 'ini decode')
            setUserId(decode?.id)
            const getDataCart = await axios.get(`https://ordercoffee-app.herokuapp.com/users/${decode?.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                if (res.status == 200 || res.status == 201) {
                    console.log(res.data, "ini dari res");
                    setDataCart(res.data.data.cart)

                    axios.get(`https://ordercoffee-app.herokuapp.com/cart`, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }).then(res => {
                        // console.log(res.data.data, "ini res");
                        if (res.status == 200 || res.status == 201) {
                            setKeranjang(res.data.data[0])

                        }
                        // settotalPrice(res.data.data )
                    })
                }
            })

        } catch (error) {
            // console.log(error, 'ini error cart')
        }
    }



    // console.log(dataCart, 'ini data cart');
    useEffect(() => {
        // getDataUser()
        getDataCart()
    }, [])

    const mapped = dataCart.map((data) => {
        const filterFind = keranjang.find((menu) => menu?.id == data?.id)
        return filterFind
    })

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }



    // console.log(subTotal, 'ini subtotal');


    const dataMenuCart = () => {
        if (mapped[0]?.id) {
            return (
                <>
                    <table className="min-w-full">
                        <thead >
                            <tr className="border-t border-[#C78342]">
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Product
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Harga
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Quantity
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Total
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Hapus
                                </th>
                            </tr>
                        </thead>
                        {mapped.map((data) => {

                            return (
                                // <>

                                <tbody className="border-b">
                                    <tr className="bg-white" key={data?.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">

                                            <div className="flex justify-start">

                                                <Image src={`https://ordercoffee-app.herokuapp.com/menu/image/${data?.menu?.photo}`} unoptimized={true} height={50} width={60} /><h3 className="ml-8 mt-4">{data?.menu?.name}</h3>
                                            </div>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {rupiah(data?.price)}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {data?.amount}
                                        </td>
                                        <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap ">
                                            {rupiah(data?.price * data?.amount)}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <Button onClick={() => deleteModal(data?.id)} icon={<DeleteOutlined />} type='danger' danger={true}></Button>
                                        </td>
                                    </tr>
                                </tbody>

                                // </>

                            )
                        })}
                    </table>
                </>

            )
        } else {
            return (
                <table className="min-w-full">
                    <thead >
                        <tr className="border-t border-[#C78342]">
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Product
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Harga
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Quantity
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Total
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Hapus
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={5} className='text-center'><Empty /></td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    }


    const handleOkModalDelete = () => {
        axios.delete(`https://ordercoffee-app.herokuapp.com/cart/${deleteId}`).then(res => {
            console.log(res, 'ini res api delete')
        })
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
            getDataCart()
            message.success("Delete successfull")
            message.success("Delete successfull")
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisibleDelete(false);
    }

    const deleteModal = (value) => {
        console.log(value, 'ini record value')
        if (value) {
            setDeleteId(value);
            setVisibleDelete(true);
        } else {
            setVisibleDelete(false)
        }
    };

    // console.log(userId, 'ini data sent')

    const finishCheckout = async () => {
        try {

            const hitung = mapped.map((data) => {
                const nilai = data?.price * data?.amount
                return nilai
            }).reduce((prev, current) => {
                return prev + current
            })

            // console.log(hitung)
            const sentCart = {
                totalPrice: hitung,
                user_id: userId
            }

            // console.log(totalPrice, 'ini value sent cart');

            await axios.post("https://ordercoffee-app.herokuapp.com/transaction", sentCart, {
                headers: {
                    "Content-Type": 'application/json   ',
                }
            }).then(res => {
                console.log(res.data.data, 'ini res post')
                if (res.status == 200 || res.status == 201) {
                    localStorage.setItem('idCart', res.data.data.id)
                    message.success("Selamat Transaksi Anda telah sukses")
                    message.success("Selamat Transaksi Anda telah sukses")
                    router.push(`/transaksi/${userId}`)
                }
            })
        } catch (error) {
            if (error) {
                console.log(error, "ini error");
                message.error("Failed checkout")
            }

        }
    }


    // const total = mapped.map((data) => {
    //     const nilai = data?.price * data?.amount
    //     return nilai
    // }).reduce((prev, current) => {
    //     return prev + current
    // })

    // setSubTotal(total)

    // console.log(subTotal, 'ini subtotaal');

    return (
        <div className='min-h-screen pt-14 ml-40 mt-5' style={{ position: "relative" }}>
            <Row>
                <Col span={12}>
                    <h2>Cart</h2>
                </Col>
            </Row>
            <Row justify="start" align="middle" className="h-80">
                <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                    <div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">

                                        {dataMenuCart()}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <Row className="flex justify-end mr-52 mt-4">
                            <Col >
                                {/* <h3 className='text-base'>Sub-total : <span className='text-base font-semibold'>{rupiah(subTotal)}
                                </span></h3> */}
                            </Col>
                        </Row>
                        <Row className="flex justify-end">
                            <Col className="mr-30 mt-10 ">

                                <button
                                    type="button"
                                    className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                    onClick={finishCheckout}
                                >
                                    Checkout
                                </button>

                            </Col>
                        </Row>
                        <Modal
                            title="Konfirmasi Hapus Menu"
                            width={370}
                            visible={visibleDelete}
                            onOk={handleOkModalDelete}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <p className='text-[#C78342]'>Yakin ingin menghapus ?</p>

                        </Modal>
                    </div>

                </Col>
            </Row>
        </div >
    )
}