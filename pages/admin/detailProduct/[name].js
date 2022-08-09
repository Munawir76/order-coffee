import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import MainLayout from "../../../component/admin/layout";
import ButtonBack from "../../../component/reusable/buttonBack"
import Foto1 from '../../../public/images/redvalvet.jpg'
import Image from 'next/image'
import Foto2 from '../../../public/images/vietnamdrip.jpg'
import Foto3 from '../../../public/images/taro.jpg'
import { Layout, Row, Col, Card } from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode";

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
                // apiDataProductDetail = res.data.data
                // console.log(apiDataProductDetail)
                setDataDetailProduct(res.data.data[0])


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
                            <Card style={{ width: 800, height: 470, justifyContent: 'space-between', borderRadius: "2%" }}>
                                <Row>
                                    <Col span={9}>
                                        {dataSelected?.photo}
                                    </Col>
                                    <Col span={9} className="space-y-3">
                                        <div >
                                            <h3 className="text-xs">Nama Product</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.name}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-xs">Id Product</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.id}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-xs">Harga</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">Rp. {dataSelected?.price}</p></Card>
                                        </div>
                                        {/* <div>
                                            <h3 className="text-xs">Status</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.}</p></Card>
                                        </div> */}
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col>
                                        <h2>Deskripsi</h2>
                                        <Card style={{ width: 250 }}>
                                            <p>{dataSelected?.description}</p>
                                        </Card>
                                    </Col>
                                    <Col span={14}>
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