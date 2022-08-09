import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Menu, Select, Upload, Dropdown, Form } from 'antd';
import { EyeOutlined, DeleteOutlined, FormOutlined, } from '@ant-design/icons';
import AddFotoProduct from "../../menu/addFotoProduct"
import Link from "next/link";
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const { Search } = Input;
const { Option } = Select

function columns(deleteModal) {
    return [
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
                            onClick={() => deleteModal(record.name)}
                        >
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];
}


export default function KontenProduct() {

    // Modal Add Product
    const [visibleAddProduct, setVisibleAddProduct] = useState(false);
    const [dataProduct, setDataProduct] = useState()
    // Modal delete
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [modalTaskId, setModalTaskId] = useState('');
    const [confirmLoading, setConfirmLoading] = useState(false);
    // add product
    const [namaProduct, setNamaProduct] = useState('')
    const [description, setDescription] = useState('')
    const [statusProduct, setStatusProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
    const [fotoProduct, setFotoProduct] = useState('')

    const onFinishAdd = () => {
        try {
            const newProduct = {
                name: namaProduct,
                price: priceProduct,
                description: description,
                status: statusProduct
            }
        } catch (error) {

        }
    }

    const handleChangeImage = (filePath) => {
        console.log(filePath)
        setFotoProduct(filePath)
    }

    const onChangeNamaProduct = (e) => {
        const value = e.target.value
        setNamaProduct(value)
        // console.log(value)
    }

    const onChangedescription = (e) => {
        const value = e.target.value
        setDescription(value)
        // console.log(value)
    }

    const onChangeStatusProduct = (e) => {
        const value = e.target.value
        setStatusProduct(value)
        console.log(value)
    }

    const onChangePriceProduct = (e) => {
        const value = e.target.value
        setPriceProduct(value)
    }

    const onChangeFotoProduct = (e) => {
        const value = e.target.value
        setFotoProduct(value)
    }


    const showModalAddProduct = () => {
        setVisibleAddProduct(true);
    };

    const hideModalAddProduct = () => {
        setVisibleAddProduct(false);
    };


    //value modal Add Product
    const { Content, } = Layout;
    const { TextArea } = Input


    const deleteModal = (record) => {
        if (record) {
            setModalTaskId(record);
            setVisibleDelete(true);

        } else {
            setVisibleDelete(false)
        }


    };
    const handleOkModalDelete = () => {
        axios.delete(`https://ordercoffee-app.herokuapp.com/promo/${modalTaskId}`).then(res => {

        })
        setModalText('Modal tertutup dalam 5 detik');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
        }, 2000);
        location.reload()
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisibleDelete(false);

    }


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
                            visible={visibleAddProduct}
                            onOk={hideModalAddProduct}
                            onCancel={hideModalAddProduct}
                            okText="Simpan"
                            okType='primary'


                            cancelText="Batal"
                            width={800}

                        >
                            <Form onFinish={onFinishAdd} >
                                <Row justify="center" className="h-full">
                                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                                        <div className="space-y-5">
                                            <Form.Item name="name">
                                                <Row>
                                                    <Col span={22}>
                                                        <h3 className="text-base">Nama Product</h3>
                                                        <Input value={namaProduct} onChange={onChangeNamaProduct} placeholder="Nama Product" />
                                                    </Col>
                                                </Row>
                                            </Form.Item>
                                            <Form.Item name="description">
                                                <Row>
                                                    <Col span={10}>
                                                        <h3 className="text-base">Deskripsi Product</h3>
                                                        <TextArea value={description} onChange={onChangedescription} rows={5} placeholder="Deskripsi" />
                                                    </Col>
                                                    <Col span={12} className="mt-8 text-center ml-5">
                                                        <AddFotoProduct handleChangeImage={handleChangeImage} />
                                                    </Col>
                                                </Row>
                                            </Form.Item >
                                            <Form.Item name="status" >
                                                <div >
                                                    <h3 className="text-base">Status</h3>
                                                    <Select
                                                        // defaultValue="Tersedia"
                                                        style={{
                                                            width: 120,
                                                        }}
                                                        onChange={onChangeStatusProduct}
                                                        value={statusProduct}
                                                    >
                                                        <Option value="">Tersedia</Option>
                                                        <Option value="" disabled={true}>Tidak Tersedia</Option>
                                                    </Select>
                                                </div>
                                            </Form.Item>

                                            <Form.Item name="price">
                                                <Row>
                                                    <Col span={10}>
                                                        <h3 className="text-base">Harga</h3>
                                                        <Input value={priceProduct} onChange={onChangePriceProduct} maxLength={10} placeholder="Rp." />
                                                    </Col>
                                                </Row>
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Modal>
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96 mt-6'>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(deleteModal)} dataSource={dataProduct} />
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
                    <p className='text-[#C78342]'>Yakin menghapus ?<Space className='text-black text-base ml-3'>{(modalTaskId)}</Space></p>

                </Modal>

            </Content>
        </div>
    )
}