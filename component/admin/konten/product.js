import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Select, Form, message, Card } from 'antd';
import { EyeOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import Link from "next/link";
import ButtonBack from '../../reusable/buttonBack';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const { Search } = Input;
const { Option } = Select



function columns(deleteModal, editModal) {
    return [
        // {
        //     title: 'No.',
        //     dataIndex: 'no',
        //     key: 'no',
        //     render: (_, render) => {
        //         for (i = 0; i < render.length ; i++) {
        //             return (
        //                 { i }
        //             )
        //         }
        //     }
        // },
        // {
        //     title: 'ID Product',
        //     dataIndex: 'id',
        //     key: 'id',
        // },
        {
            title: 'Product',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Harga',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (status) => {
                if (status === "Tersedia") {
                    return (
                        <Tag color="green">{status}</Tag>
                    )
                } else {
                    return (
                        <Tag color="red" > {status}</Tag>
                    )
                }
            }

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {/* <Link href={`/admin/editProduct/${record.name}`}> */}
                    <Tooltip placement="left" title="Edit Product">
                        <Button
                            onClick={() => editModal(record.id)}
                            style={{ color: "blue", borderColor: "blue" }}
                            icon={<FormOutlined />}

                        >
                        </Button>
                    </Tooltip>
                    {/* </Link> */}
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
                            onClick={() => deleteModal(record.id)}
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

    //Modal Edit Product
    const [visibleEditProduct, setVisibleEditProduct] = useState(false);
    const [dataSelected, setDataSelected] = useState('')


    // Modal delete                                                                                                                                                                          
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [modalTaskId, setModalTaskId] = useState('');
    const [confirmLoading, setConfirmLoading] = useState(false);

    // add product
    const [namaProduct, setNamaProduct] = useState('')
    const [description, setDescription] = useState('')
    const [statusProduct, setStatusProduct] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
    const [fotoProduct, setFotoProduct] = useState('')

    //Edit product
    const [editNamaProduct, setEditNamaProduct] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editStatus, setEditStatus] = useState('')
    const [editPrice, setEditPrice] = useState('')
    const [editFoto, setEditFoto] = useState('')
    const [finish, setFinish] = useState('')
    const [dataDetailProduct, setDataDetailProduct] = useState([])

    //pagenation
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 4,
    });

    console.log(pagination, 'ini page product')

    const onFinishAdd = async () => {
        try {
            const newProduct = {
                name: namaProduct,
                price: priceProduct,
                description: description,
                status: statusProduct,
                photo: fotoProduct
            }
            console.log(newProduct)
            const sentData = await axios.post("https://ordercoffee-app.herokuapp.com/menu/", newProduct, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }).then(res => {
                console.log(res)
                setVisibleAddProduct(false)
                message.success("Successfull Create menu")
            })
        } catch (error) {
            // console.log(error, "ini error");
            message.error("failed create menu")
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
    }

    const handleChangeImage = (filePath) => {
        const value = e.target.files[0]
        // console.log(filePath)
        setFotoProduct(value)
    }

    //Add Product
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

    const onChangeStatusProduct = (value) => {
        // const value = e.target.value
        setStatusProduct(value)
        console.log(value)
    }

    const onChangePriceProduct = (e) => {
        const value = e.target.value
        setPriceProduct(value)
        console.log(value)
    }

    const onChangeFotoProduct = (e) => {
        console.log(e.target.files, " ini files nya")
        const value = e.target.files[0]
        // console.log(filePath)
        setFotoProduct(value)
    }


    const showModalAddProduct = () => {
        setVisibleAddProduct(true);
    };

    const hideModalAddProduct = () => {
        setVisibleAddProduct(false);
    };

    const showModalEditProduct = () => {
        setVisibleEditProduct(true);
    };

    const hideModalEditProduct = () => {
        setVisibleEditProduct(false);
    };

    //value modal Add Product
    const { Content, } = Layout;
    const { TextArea } = Input

    const deleteModal = (record) => {
        if (record) {
            setModalTaskId(record);
            setVisibleDelete(true);

        } else {
            // console.log(deleteModal)
            setVisibleDelete(false)
        }
    };

    const handleOkModalDelete = () => {
        axios.delete(`https://ordercoffee-app.herokuapp.com/menu/${modalTaskId}`).then(res => {

        })
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
            message.success("Delete successfull")
        }, 2000);

        // location.reload()
    };

    const handleCancel = () => {
        // console.log('Clicked cancel button');
        setVisibleDelete(false);
        // setVisibleImage(false);

    }

    async function getDataProduct(params = {}) {
        try {
            const getToken = localStorage.getItem("tokenAdmin")
            const decode = jwt_decode(getToken)
            // console.log(getToken)
            await axios.get('https://ordercoffee-app.herokuapp.com/menu', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                // console.log(res.data.items)
                const apiDataProduct = res.data.items
                // console.log(apiDataProduct)
                setDataProduct(apiDataProduct)
            })
            setPagination({
                ...params.pagination,
                total: dataProduct.length
            });

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDataProduct(pagination)
    }, [])

    //pagenition
    const handleTableChange = (newPagination) => {
        getDataProduct({

            pagination: newPagination,

        });
    };



    //update start
    //Get Product
    async function getDataDetailProduct() {
        try {
            const tokenDetailProduct = localStorage.getItem('tokenAdmin')
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

    // console.log(dataDetailProduct, 'berhasil ambil data')

    const onFinishEdit = async () => {
        try {
            const editProduct = {
                name: editNamaProduct,
                price: editPrice,
                description: editDescription,
                status: editStatus,
                photo: editFoto
            }
            // const editProduct = dataSelected
            console.log(editProduct, 'ini new product')

            const sentData = await axios.put(`https://ordercoffee-app.herokuapp.com/menu/${dataSelected}`, editProduct, {
                headers: {
                    "content-type": 'multipart/form-data'
                }

            }).then(res => {
                // console.log(res)
                setVisibleEditProduct(false)
                setFinish(true)
                message.success("Successfull Edit menu")
            })
        } catch (error) {
            console.log(error, "ini error");
            message.error("failed Edit menu")
        }

    }

    //Edit Product
    const onChangeeditNamaProduct = (e) => {
        const value = e.target.value
        setEditNamaProduct(value)
        // console.log(value)
    }

    const onChangeeditDescription = (e) => {
        const value = e.target.value
        setEditDescription(value)
        // console.log(value)
    }

    const onChangeeditStatus = (value) => {
        // const value = e.target.value
        setEditStatus(value)
        // console.log(value)
    }

    const onChangeeditPrice = (e) => {
        const value = e.target.value
        setEditPrice(value)
        // console.log(value)
    }

    const onChangeeditFoto = (e) => {
        console.log(e.target.files, " ini files nya")
        const value = e.target.files[0]
        // console.log(filePath)
        setEditFoto(value)
    }
    const editModal = (record) => {
        console.log(record, 'ini record')
        if (record) {
            setDataSelected(record);
            setVisibleEditProduct(true);
        } else {
            setVisibleEditProduct(false)
        }
    };

    //Search
    const onSearch = (value) => {
        axios.get(`https://ordercoffee-app.herokuapp.com/menu/search/menu?page=1&limit=20&search=${value}`).then(res => {
            setDataProduct(res.data.items)
            console.log(res.data.items, 'ini hasil search')
        })
    };

    const onSelect = (value) => {
        // console.log('onSelect', value);
        axios.get(`https://ordercoffee-app.herokuapp.com/menu/search/menu?page=1&limit=20&search=${value}`).then(res => {
            setDataProduct(res.data.items)
            console.log(res.data.items, 'ini hasil select search')
        })
    };


    return (
        <div>
            <Content>
                <h3 className="text-lg mt-6 ml-24">Data Product/All</h3>
                <Row className='mt-6 ml-24 justify-between'>
                    <Col span={5}>
                        <Search
                            placeholder="Search Product"
                            allowClear
                            enterButton
                            size="large"
                            type="text"

                            onSearch={onSearch}
                        />
                    </Col>
                    <Col span={5} className="">
                        <Button type="primary" onClick={showModalAddProduct}>
                            + Add Product
                        </Button>
                    </Col>
                </Row>
                <Row justify='end' style={{ marginRight: 100 }}>
                    <Col>
                        <Modal
                            title="Add Product"
                            visible={visibleAddProduct}
                            onOk={onFinishAdd}
                            onCancel={hideModalAddProduct}
                            okText="Simpan"
                            okType='primary'
                            cancelText="Batal"
                            width={800}
                        >
                            <Form >
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
                                                    <Col span={12}>
                                                        <Form.Item name='photo'>
                                                            <div className="mb-3 w-30 ml-8">
                                                                <label
                                                                    htmlFor="formFile"
                                                                    className="form-label inline-block text-gray-700"
                                                                >
                                                                    <h3 className="text-base ml-16">Upload Gambar Promo</h3>
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
                                            </Form.Item >
                                            <Form.Item name="status" >
                                                <div >

                                                    <Row>
                                                        <Col span={10}>
                                                            <h3 className="text-base">Status</h3>
                                                            <Select
                                                                defaultValue="----Pilih status"
                                                                style={{
                                                                    width: 225,

                                                                }}
                                                                onChange={onChangeStatusProduct}
                                                                value={statusProduct}
                                                            >
                                                                <Option value="Tersedia" >Tersedia</Option>
                                                                <Option disabled>Tidak tersedia</Option>

                                                            </Select>
                                                        </Col>
                                                    </Row>
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
                        <Modal
                            title="Edit Product"
                            visible={visibleEditProduct}
                            onOk={onFinishEdit}
                            onCancel={hideModalEditProduct}
                            okText="Simpan"
                            okType='primary'
                            cancelText="Batal"
                            width={700}

                        >
                            <Form  >
                                {/* onFinish={finish} */}
                                <Row justify="center" className="h-full">
                                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                                        {/* <Card style={{ width: 700, height: 600, justifyContent: 'space-between', borderRadius: "3%", }}> */}
                                        <div className="space-y-5">
                                            <Row>
                                                <Col span={22}>
                                                    <Form.Item name='name'
                                                    >
                                                        <h3 className="text-base">Nama Product</h3>
                                                        <Input onChange={onChangeeditNamaProduct} value={editNamaProduct} />

                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={10}>
                                                    <Form.Item name='editDescription'>
                                                        <h3 className="text-base">Deskripsi Product</h3>
                                                        <TextArea rows={5} onChange={onChangeeditDescription} value={editDescription} />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={12}>
                                                    <Form.Item name='photo'>
                                                        <div className="mb-3 w-30">
                                                            <label
                                                                htmlFor="formFile"
                                                                className="form-label inline-block text-gray-700"
                                                            >
                                                                <h3 className="text-base ml-16">Upload Gambar Promo</h3>
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
                                                                onChange={onChangeeditFoto}

                                                            />
                                                        </div>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Form.Item name='status'>
                                                <h3 className="text-base">Status</h3>
                                                <Select
                                                    style={{
                                                        width: 225,

                                                    }}
                                                    onChange={onChangeeditStatus}
                                                    value={editStatus}
                                                >
                                                    <Option value="Tersedia" >Tersedia</Option>
                                                    <Option value='Tidak tersedia'>Tidak tersedia</Option>

                                                </Select>
                                            </Form.Item>

                                            <Row>
                                                <Col span={10}>
                                                    <Form.Item name='price'>
                                                        <h3 className="text-base">Harga</h3>
                                                        <Input maxLength={10} onChange={onChangeeditPrice} value={editPrice} />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </div>
                                        {/* </Card> */}
                                    </Col>
                                </Row>
                            </Form>
                        </Modal>
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96 mt-4'>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(deleteModal, editModal)} dataSource={dataProduct}
                            pagination={pagination}
                            onChange={handleTableChange}
                            className="shadow-sm" />


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

            </Content>
        </div>
    )
}