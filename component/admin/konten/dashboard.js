import { Layout, Col, Row, Card, Space } from "antd";
import { SwapOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
const { Content } = Layout;
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";


export default function ContentDashBoard() {

    const [dataProduct, setDataProduct] = useState([])
    const [dataUser, setDataUser] = useState([])
    const [dataLaporan, setDataLaporan] = useState([])

    async function getDataProduct() {
        try {
            const getToken = localStorage.getItem("tokenAdmin")
            const decode = jwt_decode(getToken)
            // console.log(getToken)
            await axios.get('https://ordercoffee-app.herokuapp.com/menu', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data.items, 'INI RES')
                const apiDataProduct = res.data.items
                // console.log(apiDataProduct)
                setDataProduct(apiDataProduct)
            })

        } catch (error) {
            console.error(error);
        }
    }

    async function getDataUser() {
        try {

            await axios.get('https://ordercoffee-app.herokuapp.com/users', {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                // console.log(res.data.data);
                const apiDataUser = res.data.items
                // console.log(apiDataUser)
                setDataUser(apiDataUser)
            })


        } catch (error) {
            console.log(error, 'ini error bro');
        }
    }

    async function getDataLaporan() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res, 'ini res laporan');
                setDataLaporan(res.data.data)
            })

        } catch (error) {

        }
    }

    useEffect(() => {
        getDataLaporan()
        getDataProduct()
        getDataUser()
    }, [])


    const totalProduct = dataProduct.length;
    const totalUser = dataUser.length;
    const totalTransaksi = dataLaporan.length
    // const totalPendapatan = data.reduce((i, obj) => {
    //     return i + obj.jumlah;
    // }, 0);


    return (
        <div>
            <Content
                className="bg-white h-96"
                style={{
                    padding: 24,
                    margin: 0,
                    height: 600
                }}
            >
                <Row justify="center">
                    <div className="flex justify-between space-x-7">
                        <div className="block p-2 rounded-lg shadow-lg bg-[#1FC8B9] w-72 h-24">
                            <Row className="justify-between m-3">
                                <Col style={{ fontSize: '15pt' }}>
                                    <h5 className="text-gray-900 text-base leading-tight font-semibold ">
                                        Total Product
                                    </h5>
                                    <Col >
                                        <h5 className="font-light"> {totalProduct} Product</h5>
                                    </Col>
                                </Col>
                                <Col style={{ fontSize: '25pt' }} className="text-white"><SwapOutlined /></Col>
                            </Row>
                        </div>
                        <div className="block p-2 rounded-lg shadow-lg bg-[#4C6FFF] w-72 h-24">
                            <Row className="justify-between m-3">
                                <Col style={{ fontSize: '15pt' }}>
                                    <h5 className="text-gray-900 text-base leading-tight font-semibold ">
                                        Total User
                                    </h5>
                                    <Col ><h5 className="font-light"> {totalUser} Pengguna</h5></Col>
                                </Col>
                                <Col style={{ fontSize: '25pt' }} className="text-white"><UserOutlined /></Col>
                            </Row>
                        </div>
                        <div className="block p-2 rounded-lg shadow-lg bg-[#FDD74F] w-72 h-24">
                            <Row className="justify-between m-3">
                                <Col style={{ fontSize: '15pt' }}>
                                    <h5 className="text-gray-900 text-base leading-tight font-semibold ">
                                        Total Transaksi
                                    </h5>
                                    <Col >{totalTransaksi}</Col>
                                </Col>
                                <Col style={{ fontSize: '25pt' }} className="text-white"><ShoppingOutlined /></Col>
                            </Row>
                        </div>
                    </div>
                </Row>
            </Content >
        </div>
    )
}