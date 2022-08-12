import { useRouter } from "next/router";
import MainLayout from "../../../component/admin/layout";
import ButtonBack from "../../../component/reusable/buttonBack"
import React from "react";
import { useState, useEffect } from "react";
import 'antd/dist/antd.css'
import { Layout, Row, Col, Card, Input, Upload, Button, Select, Menu, message, Space, Form } from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode";

const { Content, } = Layout;
const { TextArea } = Input
const { Option } = Select

export default function EditProduct() {
    const [visibleAddProduct, setVisibleAddProduct] = useState(false);
    const [finish, setFinish] = useState()

    // get detail produt
    const [dataDetailProduct, setDataDetailProduct] = useState([])

    //Update Product
    const [namaProduct, setNamaProduct] = useState('')
    const [description, setDescription] = useState('')
    const [statusProduct, setStatusProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
    const [fotoProduct, setFotoProduct] = useState('')

    //Get Product
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
    const { product } = router.query;
    const dataSelected = dataDetailProduct.find((data) => data.name == product);
    // console.log(dataSelected,
    //     'o0io')
    const onFinishAdd = async () => {
        try {
            const newProduct = {
                name: namaProduct,
                price: priceProduct,
                description: description,
                status: statusProduct,
                photo: fotoProduct
            }
            // const newProduct = dataSelected
            console.log(newProduct, 'ini new product')
            const sentData = await axios.put(`https://ordercoffee-app.herokuapp.com/menu/${dataSelected?.id}`, newProduct, {
                headers: {
                    "content-type": 'application/json'
                }
            }).then(res => {
                console.log(res)
                setVisibleAddProduct(false)
                // setFinish(true)
                message.success("Successfull Edit menu")
            })
        } catch (error) {
            console.log(error, "ini error");
            message.error("failed Edit menu")
        }
    }

    const onChangeNamaProduct = (e) => {
        const value = e.target.value
        setNamaProduct(value)
        console.log(value)
    }

    const onChangedescription = (e) => {
        const value = e.target.value
        setDescription(value)
        // console.log(value)
    }

    const onChangeStatusProduct = (value) => {
        // const value = e.target.value
        setStatusProduct(value)
        // console.log(value)
    }

    const onChangePriceProduct = (e) => {
        const value = e.target.value
        setPriceProduct(value)
        // console.log(value)
    }

    const onChangeFotoProduct = (e) => {
        console.log(e.target.files, " ini files nya")
        const value = e.target.files[0]
        // console.log(filePath)
        setFotoProduct(value)
    }

    return (
        <div>
            <MainLayout>
                <Content>
                    <Row className='mt-6 max-w-sm ml-24'>
                        <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                            <h3 className="text-lg">Edit Product</h3>
                        </Col>
                    </Row>
                    <Form onFinish={finish} >
                        <Row justify="center" className="h-screen">
                            <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                                <Card style={{ width: 700, height: 600, justifyContent: 'space-between', borderRadius: "3%", }}>
                                    <div className="space-y-5">
                                        <Row>
                                            <Col span={22}>
                                                <Form.Item name='name'
                                                >
                                                    <h3 className="text-base">Nama Product</h3>
                                                    <Input onChange={onChangeNamaProduct} value={namaProduct} placeholder={dataSelected?.name} />

                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={10}>
                                                <Form.Item name='description'>
                                                    <h3 className="text-base">Deskripsi Product</h3>
                                                    <TextArea rows={5} onChange={onChangedescription} value={description} placeholder={dataSelected?.description} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item name='photo'>
                                                    <div className="mb-3 w-30">
                                                        <label
                                                            htmlFor="formFile"
                                                            className="form-label inline-block mb-2 text-gray-700"
                                                        >
                                                            Upload Gambar Promo
                                                        </label>
                                                        <input
                                                            className="form-control w-60 ml-10
                                                                    block
                                                                    px-3
                                                                    py-1.5
                                                                    text-sm
                                                                    font-normal
                                                                    text-gray-700
                                                                    bg-white bg-clip-padding
                                                                    border border-solid border-gray-300
                                                                    rounded
                                                                    transition
                                                                    ease-in-out
                                                                    m-0
                                                                    focus:text-gray-700 focus:bg-white focus:border-[#C78342] focus:outline-none"
                                                            type="file"
                                                            id="formFile"
                                                            onChange={onChangeFotoProduct}

                                                        />
                                                    </div>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Form.Item name='status'>
                                            <h3 className="text-base">Status</h3>
                                            <Select
                                                placeholder={dataSelected?.status}
                                                style={{
                                                    width: 225,

                                                }}
                                                onChange={onChangeStatusProduct}
                                                value={statusProduct}
                                            >
                                                <Option value="Tersedia" >Tersedia</Option>
                                                <Option value='Tidak tersedia'>Tidak tersedia</Option>

                                            </Select>
                                        </Form.Item>

                                        <Row>
                                            <Col span={10}>
                                                <Form.Item name='price'>
                                                    <h3 className="text-base">Harga</h3>
                                                    <Input maxLength={10} onChange={onChangePriceProduct} value={priceProduct} placeholder={dataSelected?.price} />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Row className="justify-start ml-8" >
                                            <Col span={5}>
                                                <Button onClick={onFinishAdd} style={{ backgroundColor: 'rgba(15, 110, 248, 0.8)', color: 'white', }}>Simpan</Button>
                                            </Col>
                                            <Col span={5} >
                                                <ButtonBack />
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Form>
                </Content>
            </MainLayout>
        </div >
    )
}