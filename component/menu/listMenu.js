import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Col, Button, Row, Input, message, AutoComplete, Form, Modal } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Router, useRouter } from 'next/router';

const { Search } = Input;

export default function ListMenu() {

    const [dataProduct, setDataProduct] = useState([])
    // const [idMenu, setIdMenu] = useState([])
    const [visibleGuest, setVisibleGuest] = useState(false);
    const [namaGuest, setNamaGuest] = useState('')

    async function getDataProduct() {
        try {
            await axios.get('https://ordercoffee-app.herokuapp.com/menu', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data.items, 'ini id menu')
                setDataProduct(res.data.items)
                // setIdMenu(res.data.items.id)
            })
        } catch (error) {
            console.error(error);
        }
    }

    async function getDataPromo() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/promo/`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res, 'ini res api promo')
            })
        } catch (error) {

        }
    }

    const onSearch = async (value) => {
        try {
            console.log(value, 'ini value search');
            axios.get(`https://ordercoffee-app.herokuapp.com/menu/search/${value}`).then(res => {
                if (res.status == 200 || res.status == 201) {
                    setDataProduct([res.data])
                    console.log(res, 'ini hasil search')
                } else if (res.status == 400) {
                    getDataProduct()
                }
            })

        } catch (error) {
            message.error(error)
            message.error(error)
            message.error(error)
        }

    };

    useEffect(() => {
        getDataProduct()
        getDataPromo()
    }, [])

    const guestModal = () => {
        setVisibleGuest(true);

    };

    const handleCancel = () => {
        setVisibleGuest(false);
    }

    const onChangeNamaGuest = (e) => {
        const value = e.target.value
        setNamaGuest(value)
        console.log(value)
    }

    const router = useRouter()

    function validate(menu) {
        if (localStorage.getItem('tokenCustomer') || localStorage.getItem('idGuest')) {
            router.push(`/detailMenu/${menu.id}`)
        }
        else if (!localStorage.getItem('tokenCustomer')) {

            guestModal()

        }
    }

    // function handleOkModalGuest() {
    //     localStorage.setItem("tokenGuest", namaGuest)
    //     setVisibleGuest(false)
    // }

    const handleOkModalGuest = async (menu) => {
        try {
            const postGuest = {
                fullname: namaGuest,
                role_id: 3
            }
            console.log(postGuest)
            const sentData = await axios.post("https://ordercoffee-app.herokuapp.com/users/guest", postGuest, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res, 'ini res post guest')
                setVisibleGuest(false)
                localStorage.setItem("idGuest", res.data.data.id)
                setTimeout(() => {
                    message.success("Successfull regist")
                    router.push(`/detailMenu/${menu.id}`)
                }, 2000);

            })
        } catch (error) {
            // console.log(error, "ini error");
            message.error("failed regist")
        }
    }

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    return (
        <div >
            <Row align='middle' justify='center' className='border-2 border-white mb-10' style={{ height: "10vh", marginTop: 90, width: 1000, marginLeft: 180, borderRadius: 12, backgroundColor: 'white', }} >
                <Col span={7}>
                    <h3 className=" font-medium  text-black text-lg">Cari menu yang kamu suka</h3>
                </Col>
                <Col span={7} className="ml-60">
                    <AutoComplete
                        dropdownMatchSelectWidth={252}
                        style={{
                            width: 300,
                        }}

                        onSearch={onSearch}
                    >
                        <Input.Search size="large" placeholder="cari menu" enterButton />
                    </AutoComplete>
                </Col>
            </Row>
            <Row className="bg-[#fff] mb-16 align-middle justify-center flex gap-10 ">
                {dataProduct.map((menu) => {
                    return (
                        <>
                            <Col lg={{ span: 5 }}
                                md={{ span: 6 }}
                                sm={{ span: 20 }}
                                xs={{ span: 20 }}
                                className=" transition ease-in-out hover:-translate-y-2 border-2 border-[#C78342] border: rounded-lg">
                                <div className="rounded-lg shadow-lg bg-white  ">
                                    <a
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        <Image
                                            src={`https://ordercoffee-app.herokuapp.com/menu/image/${menu?.photo}`}
                                            unoptimized={true}
                                            width={350}
                                            height={350}
                                            style={{ borderRadius: 6 }} />
                                    </a>
                                    <div className="p-6">
                                        <Row justify='center'>
                                            <Col span={12} offset={1}>
                                                <h5 className="text-gray-900 text-l font-medium mb-2">
                                                    {menu?.name}
                                                </h5>
                                                <p className="text-gray-700 text-base mb-4">
                                                    {rupiah(menu?.price)}
                                                </p>
                                            </Col>
                                            <Col span={10} offset={1}>
                                                <button
                                                    type="button"
                                                    className=" space-x-2 justify-end inline-block px-6 py-2.5 bg-[#C78342] text-white font-medium text-xs leading-tight rounded-full shadow-md focus:shadow-lg hover:text-white hover:bg-[#805336] active:bg-[#805336]"
                                                    onClick={() => { validate(menu) }}
                                                >
                                                    Detail
                                                </button>
                                            </Col>
                                        </Row>
                                        <div>
                                            <Modal
                                                title="Login sebagai Guest ?"
                                                width={370}
                                                visible={visibleGuest}
                                                onOk={() => handleOkModalGuest(menu)}
                                                // confirmLoading={confirmLoading}
                                                onCancel={handleCancel}
                                            >
                                                <Form>
                                                    <Form.Item>
                                                        <Input value={namaGuest} onChange={onChangeNamaGuest} placeholder='Maukan nama' />
                                                    </Form.Item>
                                                </Form>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </>
                    )
                })}
            </Row>

        </div >
    )
}


