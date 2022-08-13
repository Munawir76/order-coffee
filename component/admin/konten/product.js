import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Select, Form, message, Card } from 'antd';
import { EyeOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import Link from "next/link";
import ButtonBack from '../../reusable/buttonBack';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const { Search } = Input;
const { Option } = Select



function columns(updateModal, deleteModal) {
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
                                // onClick={() => updateModal(record)}
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

    //Update product
    const [visibleEditProduct, setVisibleEditProduct] = useState(false);
    const [modalTextDua, setModalTextDua] = useState('Content of the modal');
    const [modalTaskIdDua, setModalTaskIdDua] = useState('');
    const [foto, setFoto] = useState('')

    const [form] = Form.useForm();

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
        }, 2000);
        // location.reload()
    };

    const handleCancel = () => {
        // console.log('Clicked cancel button');
        setVisibleDelete(false);
        // setVisibleImage(false);

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

    //update start
    const onChangeFoto = (e) => {
        const value = e.target.files[0]
        setFoto(value)
        // console.log(value)
    }
    const normFile = (e) => {
        console.log('Upload event:', e);

        // if (Array.isArray(e)) {
        //     return e;
        // }
        // return console.log(e?.fileList)

    };

    const updateModal = (record) => {
        console.log(record, 'INI RECORD')
        if (record) {
            setModalTaskIdDua(record.id);
            setVisibleEditProduct(true);
            form.setFieldsValue({
                id: record.id,
                name: record.name,
                price: record.price,
                status: record.status,
                photo: record.photo,
                description: record.description,
            });
        } else {
            setVisibleEditProduct(false)
        }
    };
    // const onFormSubmit = (e) => {
    //     e.preventDefault()
    // }

    const handleOkModalUpdate = async () => {
        try {
            const data = await form.getFieldsValue();
            // console.log(data)
            // const dataForm = new FormData()
            // dataForm.append("id", data.id)
            // dataForm.append("name", data.name)
            // dataForm.append('availability', data.availability)
            // dataForm.append('location', data.location)
            // // dataForm.append('image', foto)
            // dataForm.append("description", data.description)
            // dataForm.append("category_id", data.category)
            // dataForm.append("merchant_id", merchantId)

            // for (let i = 0; i < data.variant.length; i++) {
            //     dataForm.append(`variant[${i}][name]`, data.variant[i].name)
            //     dataForm.append(`variant[${i}][price]`, data.variant[i].price)
            // }
            // for (const value of dataForm.values()) {
            //     console.log(value);
            // }
            // console.log(data)
            await axios.put(`https://ordercoffee-app.herokuapp.com/menu/${data.id}`, data, {
                headers: {

                    "content-type": "application/json"
                }
            }).then(res => {
                console.log(res)
            })
            setModalTextDua('The modal will be closed after two seconds');
            setConfirmLoading(true);
            setTimeout(() => {
                setVisibleDua(false);
                setConfirmLoading(false);
            }, 2000);
            // location.reload()
        } catch (error) {
            console.log(error, 'ini errornya')

        }

    };


    // console.log(dataProduct)

    return (
        <div>
            <Content>
                <h3 className="text-lg mt-6 ml-24">Data Product/All</h3>
                <Row className='mt-6 w-full ml-24 justify-between'>
                    <Col span={5}>
                        <Search
                            placeholder="Search Product"
                            allowClear
                            size="large"
                            type="text"
                        />
                    </Col>
                    <Col span={7} className="">
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

                                                            />
                                                        </div>
                                                    </div>
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
                            title="Konfirmasi Update Data"
                            visible={visibleEditProduct}
                            onOk={handleOkModalUpdate}
                            // confirmLoading={confirmLoading}
                            onCancel={hideModalEditProduct}
                            width={800}
                        >
                            <Form>
                                <Row justify="center" className="h-full">
                                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >

                                        <div className="space-y-5">
                                            <Row>
                                                <Col span={22}>
                                                    <Form.Item name='name'
                                                    >
                                                        <h3 className="text-base">Nama Product</h3>
                                                        <Input placeholder />

                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={10}>
                                                    <Form.Item name='description'>
                                                        <h3 className="text-base">Deskripsi Product</h3>
                                                        <TextArea rows={5} />
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
                                                            // onChange={onChangePhotoPromo}

                                                            />
                                                        </div>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Form.Item name='status'>
                                                <h3 className="text-base">Status</h3>
                                                <Select
                                                    // defaultValue={dataSelected?.status}
                                                    style={{
                                                        width: 225,

                                                    }}
                                                // onChange={onChangeStatusProduct}
                                                // value={statusProduct}
                                                >
                                                    <Option value="Tersedia" >Tersedia</Option>
                                                    <Option value='Tidak tersedia'>Tidak tersedia</Option>

                                                </Select>
                                            </Form.Item>

                                            <Row>
                                                <Col span={10}>
                                                    <Form.Item name='price'>
                                                        <h3 className="text-base">Harga</h3>
                                                        <Input maxLength={10} />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Modal>
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96 mt-4'>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(updateModal, deleteModal)} dataSource={dataProduct} />
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