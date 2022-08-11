import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Menu, Select, Upload, Dropdown, Form, message } from 'antd';
import { EyeOutlined, DeleteOutlined, FormOutlined, UploadOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const { Search } = Input;
const { Option } = Select



function columns(deleteModal, imageModal) {
    return [
        {
            title: 'ID Product',
            dataIndex: 'id',
            key: 'id',
        },
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
        // {
        //     title: 'Foto',
        //     dataIndex: 'photo',
        //     key: 'photo',
        //     render: (_, record) =>
        //     (
        //         <>
        //             <Tooltip placement="left" title="Open Image">
        //                 <a
        //                     onClick={() => imageModal(record.photo)}
        //                     style={{ color: "#0d6efd", borderColor: "#0d6efd", overflow: "hidden", textDecoration: "underline" }}
        //                 >
        //                     Lihat gambar
        //                 </a>
        //             </Tooltip>
        //         </>
        //     )
        // },
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
    const [status, setStatus] = useState('Tersedia')
    const [deskripsi, setDeskripsi] = useState('')

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

    // Image
    let [imageUrl, setImageUrl] = useState('')
    const [visibleImage, setVisibleImage] = useState(false);
    const [modalImage, setModalImage] = useState('Content of the modal');
    const [modalIdImage, setModalIdImage] = useState('');
    const [loadingDua, setLoadingDua] = useState(false);

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
                // if (res.status == 200) {
                //     window.alert("daftar berhasil")
                // }
                // if (res.status == 200 || res.status == 201) {
                //     window.alert("Register Success")
                //     // router.push("/login/")
                // }
                setVisibleAddProduct(false)
            })
        } catch (error) {
            console.log(error, "ini error");
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
        // console.log(value)
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
        setModalText('Modal tertutup dalam 5 detik');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
        }, 2000);
        // location.reload()
    };


    const imageModal = async (record) => {
        setLoadingDua(true)
        if (record) {
            await setModalIdImage(record);
            setVisibleImage(true);
            await axios.get(`https://ordercoffee-app.herokuapp.com/menu/image/${modalIdImage}`).then(res => {
                // console.log(res.config.url)
                setImageUrl(res.config.url)
            })
        } else {
            setVisibleImage(false)
        }
        setLoadingDua(false)
        // console.log(modalIdImage)

    };

    // const handleOkModalIdImage = () => {
    //     setImageUrl(null)
    //     setModalImage('The modal will be closed after two seconds');
    //     setConfirmLoading(true);
    //     setTimeout(() => {
    //         setVisibleImage(false)
    //         setConfirmLoading(false);
    //     }, 1000);
    //     // location.reload()
    // };


    const handleCancel = () => {
        // console.log('Clicked cancel button');
        setVisibleDelete(false);
        setVisibleImage(false);

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
                message.success("Successfull Create menu")
            })
        } catch (error) {
            console.error(error);
            message.error("failed create menu")
        }
    }

    useEffect(() => {
        getDataProduct()
    }, [])

    // console.log(dataProduct)


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
                        />
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
                                                    <div className="flex justify-center">
                                                        <div className="mb-3 w-30">
                                                            <label
                                                                htmlFor="formFile"
                                                                className="form-label inline-block mb-2 text-gray-700"
                                                            >
                                                                Upload Gambar Product
                                                            </label>
                                                            <input
                                                                className="form-control
                                                                    block
                                                                    px-3
                                                                    py-1.5
                                                                    text-base
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
                                                            // value={fotoProduct}
                                                            />
                                                        </div>
                                                    </div>
                                                </Row>
                                            </Form.Item >
                                            <Form.Item name="status" >
                                                <div >
                                                    <h3 className="text-base">Status</h3>
                                                    <Row>
                                                        <Col span={10}>
                                                            <h3 className="text-base">Status</h3>
                                                            <Input value={statusProduct} onChange={onChangeStatusProduct} maxLength={10} />
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
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96 mt-6'>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(deleteModal, imageModal)} dataSource={dataProduct} />
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