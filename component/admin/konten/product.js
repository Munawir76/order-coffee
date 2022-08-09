import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Menu, Card, Upload, Dropdown } from 'antd';
import { EyeOutlined, DeleteOutlined, FormOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const { confirm } = Modal;
const { Search } = Input;



export default function KontenProduct() {


    const [visible, setVisible] = useState(false);
    const [dataProduct, setDataProduct] = useState()

    const showModalAddProduct = () => {
        setVisible(true);
    };

    const hideModalAddProduct = () => {
        setVisible(false);
    };


    //value modal Add Product
    const { Content, } = Layout;
    const { TextArea } = Input

    const props = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',

        previewFile(file) {
            console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file

            return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                method: 'POST',
                body: file,
            })
                .then((res) => res.json())
                .then(({ thumbnail }) => thumbnail);
        },
    };

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };


    const varian = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Coffee',
                    key: '1',
                },
                {
                    label: 'Non Coffee',
                    key: '2',
                },

            ]}
        />
    );

    const status = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Tersedia',
                    key: '1',
                },
                {
                    label: 'Tidak Tersedia',
                    key: '2',
                },

            ]}
        />
    );

    const columns = [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Product',
            dataIndex: 'name',
            key: 'name',
        },
        // {
        //     title: 'Varian',
        //     dataIndex: 'varian',
        //     key: 'varian',
        // },
        {
            title: 'Harga',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Foto',
            dataIndex: 'photo',
            key: 'photo',
        },
        // {
        //     title: 'Status',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <div>
        //             {tags.map((tag) => {
        //                 let color = ''
        //                 if (tag === 'Tersedia') {
        //                     color = 'green';
        //                 }
        //                 else if (tag === 'Tidak Tersedia') {
        //                     color = 'red';
        //                 }

        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </div>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/admin/editProduct/${record.name}`}>
                        <Tooltip placement="left" title="Edit Product">
                            <Button
                                style={{ color: "blue", borderColor: "blue" }}
                                icon={<FormOutlined />}
                            >
                            </Button>
                        </Tooltip>
                    </Link>
                    <Link href={`/admin/detailProduct/${record.name}`}>
                        <Tooltip placement="left" title="Detail Product">
                            <Button
                                style={{ color: "#4ade80", borderColor: "#4ade80" }}
                                icon={<EyeOutlined />}
                            >
                            </Button>
                        </Tooltip>
                    </Link>
                    <Tooltip placement="right" title="Delete">
                        <Button
                            type="danger"
                            icon={<DeleteOutlined />}
                            danger={true}
                        // onClick={() => showDeleteConfirm(record)}
                        >
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];


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
                // console.log(res.data.data)
                const apiDataProduct = res.data.data
                // console.log(apiDataProduct)
                setDataProduct(apiDataProduct[0])
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDataProduct()
    }, [])

    console.log(dataProduct)


    return (
        <div>
            <Content>
                <Row className='mt-6 max-w-sm ml-24'>
                    <h3 className="text-lg">Data Product/All</h3>
                    <Col span={12} lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                        <Search
                            placeholder="Search Product"
                            allowClear
                            size="large"
                            type="text"
                        // onChange={(e) => setQuary(e.target.value ? [e.target.value] : [])}
                        // onChange={(e) => {
                        //     setData(e.target.value ? [e.target.value] : []);
                        // }}
                        />
                        {/* {data.filter(data => data.product.toLowerCase().includes(data)).map((user) => (user.product))} */}
                    </Col>
                </Row>
                <Row justify='end' style={{ marginRight: 100 }}>
                    <Col>
                        <Button type="primary" onClick={showModalAddProduct}>
                            + Add Product
                        </Button>
                        <Modal
                            title="Add Product"
                            visible={visible}
                            onOk={hideModalAddProduct}
                            onCancel={hideModalAddProduct}
                            okText="Simpan"
                            okType='primary'


                            cancelText="Batal"
                            width={800}

                        >
                            <Content>
                                <Row justify="center" className="h-full">
                                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                                        <div className="space-y-5">
                                            <Row>
                                                <Col span={22}>
                                                    <h3 className="text-base">Nama Product</h3>
                                                    <Input placeholder="Nama Product" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={10}>
                                                    <h3 className="text-base">Deskripsi Product</h3>
                                                    <TextArea rows={5} placeholder="Deskripsi" />
                                                </Col>
                                                <Col span={12}>
                                                    <Upload {...props} >
                                                        <h2 style={{ marginTop: '30px', marginLeft: 150 }}>Gambar Product</h2>
                                                        <Button style={{ backgroundColor: 'rgba(55, 217, 74, 0.8)', color: 'white', marginLeft: 165 }}>Change</Button>
                                                    </Upload>
                                                </Col>
                                            </Row>
                                            <div >
                                                <h3 className="text-base">Jenis Variant</h3>
                                                <Dropdown overlay={varian}>
                                                    <Button style={{ width: 270, textAlign: 'start' }}>
                                                        <Space>
                                                            Pilih Variant
                                                        </Space>
                                                    </Button>
                                                </Dropdown>
                                            </div>
                                            <div>
                                                <h3 className="text-base">Status</h3>
                                                <Dropdown overlay={status}>
                                                    <Button style={{ width: 270, textAlign: 'start' }}>
                                                        <Space>
                                                            Pilih Status
                                                        </Space>
                                                    </Button>
                                                </Dropdown>
                                            </div>
                                            <Row>
                                                <Col span={10}>
                                                    <h3 className="text-base">Harga</h3>
                                                    <Input maxLength={10} placeholder="Rp." />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Content>
                        </Modal>
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96'>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns} dataSource={dataProduct} />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}