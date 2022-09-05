import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import MainLayout from "../../../component/admin/layout";
import ButtonBack from "../../../component/reusable/buttonBack"
import { Layout, Row, Col, Card } from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode";
import Image from "next/image";

const { Content, } = Layout;

export default function DetailProduct() {

    const [dataDetailProduct, setDataDetailProduct] = useState([])

    async function getDataDetailProduct() {
        try {
            const tokenDetailProduct = await localStorage.getItem('tokenAdmin')
            const decodeTokenDetail = jwt_decode(tokenDetailProduct)
            const getDataDetail = await axios.get(`https://ordercoffee-app.herokuapp.com/menu/`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                // console.log(res.data.data)
                setDataDetailProduct(res.data.items)

            })
        } catch (error) {

        }
    }
    useEffect(() => {
        getDataDetailProduct()
    }, [])
    // console.log(dataDetailProduct)

    const router = useRouter();
    const { name } = router.query;
    const dataSelected = dataDetailProduct.find((data) => data.name == name);

    console.log(dataSelected)

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }
    return (
        <div>
            <MainLayout>
                <Content>
                    <Row className='mt-6 max-w-sm ml-24'>
                        <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                            <h3 className="text-lg">Detail Product</h3>
                        </Col>
                    </Row>
                    <Row justify="center" className="h-screen">
                        <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                            <Card style={{ width: 800, height: 500, justifyContent: 'space-between', borderRadius: "2%" }}>
                                <Row>
                                    <Col span={9}>
                                        <Image loader={() => dataSelected?.photo}
                                            src={`https://ordercoffee-app.herokuapp.com/menu/image/${dataSelected?.photo}`}
                                            unoptimized={true}
                                            width={250}
                                            height={250}
                                            style={{ borderRadius: 10 }} />
                                    </Col>
                                    <Col span={9} className="space-y-3">
                                        <div >
                                            <h3 className="text-xs">Nama Product</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.name}</p></Card>
                                        </div>

                                        <div>
                                            <h3 className="text-xs">Harga</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs"> {rupiah(dataSelected?.price)}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-xs">Status</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.status}</p></Card>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col>
                                        <h2>Deskripsi</h2>
                                        <Card style={{ width: 350, borderColor: 'white' }}>
                                            <p>{dataSelected?.description}</p>
                                        </Card>
                                    </Col>
                                    <Col span={10}>
                                        <div className="text-end mt-32">
                                            <ButtonBack />
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </MainLayout>
        </div>
    )
}