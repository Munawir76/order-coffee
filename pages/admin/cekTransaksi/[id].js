import MainLayout from "../../../component/admin/layout/index"
import ButtonBack from "../../../component/reusable/buttonBack"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import 'antd/dist/antd.css'
import { DownloadOutlined } from '@ant-design/icons'
import { Layout, Row, Col, Card, Button, } from 'antd';
import axios from "axios";


const { Content, } = Layout;

export default function CekPembayaran() {

    const [cekTransaksi, setCekTransaksi] = useState([])

    async function getCekTransaksi() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction/detail`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res, 'ini res api cek tr')
                setCekTransaksi(res.data.items)
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        getCekTransaksi()
    }, [])

    const router = useRouter();
    const { id } = router.query;
    const dataSelected = cekTransaksi.find((data) => data.id == id);

    console.log(dataSelected, 'ini data selected')

    return (
        <div>
            <MainLayout>
                <Content>
                    <Row className='mt-6 max-w-sm ml-24'>
                        <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                            <h3 className="text-lg">Cek Pembayaran</h3>
                        </Col>
                    </Row>
                    <Row justify="center" className="h-screen">
                        <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                            <Card style={{ width: 400, height: 250, borderRadius: "3%", }}>
                                <div className="space-y-5 ml-14">
                                    <Row>
                                        <Col className="space-y-6">
                                            <h3 className="text-base">Tolong periksa bukti Pembayaran</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="space-y-6">
                                            <Button icon={<DownloadOutlined />} style={{ backgroundColor: 'rgba(67, 239, 40, 0.8)', color: 'white', }}>Download bukti pembayaran</Button>

                                        </Col>
                                    </Row>
                                    <Row className="justify-start ml-4" >
                                        <Col span={10} style={{}}>
                                            <Button style={{ backgroundColor: 'rgba(15, 110, 248, 0.8)', color: 'white', }}>Simpan</Button>
                                        </Col>
                                        <Col span={10} style={{}}>
                                            <ButtonBack />
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </MainLayout>
        </div >
    )
}