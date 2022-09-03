import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Select, Dropdown, Upload, Form, message, AutoComplete } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Image from 'rc-image';
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const { Content } = Layout;
const { Option } = Select
const { Search } = Input;



function columns(deleteModal, imageModal) {
    return [
        {
            title: 'Promo',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Diskon',
            dataIndex: 'discount',
            key: 'discount',
            render: (record) => {
                const convert = record.toFixed(2) * 100 + '%'
                return convert
            }
        },
        {
            title: 'Status',
            key: 'expired',
            dataIndex: 'expired',
            render: (expired) => {
                const d = new Date().toISOString().slice(0, 10);
                // console.log(d)
                if (expired !== d) {
                    return (
                        <Tag color="green">Tersedia</Tag>
                    )
                } else if (expired === d) {
                    // console.log(expired.expired)
                    return (
                        <Tag color="red" >Tidak Tersedia</Tag>
                    )
                }
            }
        },
        {
            title: 'Expired',
            key: 'expired',
            dataIndex: 'expired',
            render: (expired) => {
                const d = new Date().toISOString().slice(0, 10);
                // console.log(d)
                if (expired !== d) {
                    return (
                        <Tag color="blue">{expired}</Tag>
                    )
                }
            }

        },
        {
            title: 'Gambar',
            key: 'photo',
            dataIndex: 'photo',
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip placement="right" title="">
                        <a
                            onClick={() => imageModal(record.photo)}
                        >Lihat Gambar
                        </a>
                    </Tooltip>
                </Space>
            ),

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
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

export default function KontenPromo() {

    const [dataPromo, setDataPromo] = useState([])
    const [menuPromo, setMenuPromo] = useState([])
    const [visibleAddPromo, setVisibleAddPromo] = useState(false);
    // add promo
    const [namaPromo, setNamaPromo] = useState('')
    const [menuIdPromo, setMenuId] = useState('')
    const [discountPromo, setDiscountPromo] = useState('')
    const [datePromo, setDatePromo] = useState('')
    const [expiredPromo, setExpiredPromo] = useState('')
    const [photoPromo, setPhotoPromo] = useState()

    // delete
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [modalTaskId, setModalTaskId] = useState('');
    const [confirmLoading, setConfirmLoading] = useState(false);

    // image modal
    const [visibleImage, setVisibleImage] = useState(false);
    const [pathImage, setPathImage] = useState()

    // Search
    const [options, setOptions] = useState([]);
    const [searchText, setSearchText] = useState('');

    async function getDataPromo() {
        try {
            const getToken = localStorage.getItem("tokenAdmin")
            const decode = jwt_decode(getToken)
            // console.log(getToken)
            await axios.get('https://ordercoffee-app.herokuapp.com/promo/', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                // console.log(res.data.data)
                const apiDataPromo = res.data.items
                console.log(apiDataPromo, 'ini res api')
                setDataPromo(apiDataPromo)
            })
        } catch (error) {
            console.error(error, 'ini error get promo');
        }
    }
    async function getMenuPromo() {
        try {
            await axios.get("https://ordercoffee-app.herokuapp.com/menu", {

            }).then(res => {
                // console.log(res.data.items)

                setMenuPromo(res.data.items)
            })
        } catch (error) {
        }
    }

    useEffect(() => {
        getDataPromo()
        getMenuPromo()
    }, [])



    const showModalAddPromo = () => {
        setVisibleAddPromo(true);
    };

    const hideModalAddPromo = () => {
        setVisibleAddPromo(false);
    };


    const onChangeNamaPromo = (e) => {
        const value = e.target.value
        setNamaPromo(value)
        // console.log(value)
    }
    const onChangeMenuidPromo = (e) => {
        // const value = e.target.value
        setMenuId(e)
        console.log(e)
    }

    const onChangeDiskonPromo = (value) => {
        setDiscountPromo(value)
        console.log(value)
    }

    const onChangeDatePromo = (e) => {
        const value = e.target.value
        setDatePromo(value)
        // console.log(value)
    }

    const onChangeExpiredPromo = (e) => {
        const value = e.target.value
        setExpiredPromo(value)
        //console.log(value)
    }
    const onChangePhotoPromo = (e) => {
        const value = e.target.files[0]
        console.log(e.target.files[0], " ini files nya")
        setPhotoPromo(value)
    }


    const handleOkModalDelete = () => {
        axios.delete(`https://ordercoffee-app.herokuapp.com/promo/${modalTaskId}`).then(res => {

        })
        setModalText('Modal tertutup dalam 5 detik');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
            getDataPromo()
            message.success("Delete successfull")
        }, 2000);
        // location.reload()
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisibleDelete(false);
    }

    const deleteModal = (record) => {
        console.log(record, 'ini record')
        if (record) {
            setModalTaskId(record);
            setVisibleDelete(true);

        } else {
            setVisibleDelete(false)
        }
    };

    const imageModal = (record) => {
        console.log(record, 'ini record image')
        if (record) {
            setPathImage(record);
            setVisibleImage(true);
            getDataPromo()

        } else {
            setVisibleImage(false)
        }
    }
    const handleCancelImage = () => {
        console.log('Clicked cancel button');
        setVisibleImage(false);
    }
    // console.log(dataPromo)
    const onFinishAdd = async () => {
        try {
            const newPromo = {
                name: namaPromo,
                menu_id: menuIdPromo,
                discount: discountPromo,
                date: datePromo,
                expired: expiredPromo,
                photo: photoPromo
            }
            // console.log(newPromo);
            // const dataForm = new FormData()
            // dataForm.append("name", namaPromo)
            // dataForm.append("menu_id", menuIdPromo)
            // dataForm.append("discount", discountPromo)
            // dataForm.append("date", datePromo)
            // dataForm.append("expired", expiredPromo)
            // dataForm.append("photo", photoPromo)
            // console.log(newPromo)
            const sentData = await axios.post("https://ordercoffee-app.herokuapp.com/promo", newPromo, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }).then(res => {
                console.log(res)
                setVisibleAddPromo(false)
                getDataPromo()
                message.success("Successfull Create promo")
            })
        } catch (error) {
            // console.log(error, "ini error");
            message.error("failed create promo")
        }
    }

    const onSearch = (value) => {
        console.log(value, 'ini value search');
        axios.get(`https://ordercoffee-app.herokuapp.com/promo/search/${value}`).then(res => {
            if (res.status == 200 || res.status == 201) {
                setDataPromo([res.data])
                console.log(res, 'ini hasil search')
            } else if (res.status == 400 || res.status == 404) {
                setDataPromo(null)
                getDataPromo()
            }

        })

    };

    // console.log(dataPromo[0].photo, 'ini path promo')

    return (
        <div>
            <Content>
                <h3 className="text-lg mt-6 ml-24">Data Promo/All</h3>
                <Row className='mt-6 ml-24 justify-between'>

                    <Col span={5}>
                        <AutoComplete
                            onSearch={onSearch}>
                            <Input.Search placeholder='Search Promo' size='large' allowClear enterButton />
                        </AutoComplete>
                    </Col>

                    <Col span={5}>
                        <Button type="primary" onClick={showModalAddPromo}>
                            + Add Promo
                        </Button>
                    </Col>
                </Row>
                <Row justify='end' style={{ marginRight: 100 }}>
                    <Col>

                        <Modal
                            title="Add Promo"
                            visible={visibleAddPromo}
                            onOk={onFinishAdd}
                            onCancel={hideModalAddPromo}
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
                                                <Form >
                                                    <Col span={12} className="space-y-6">
                                                        <Form.Item name='name'>
                                                            <div className="form-group mb-4">
                                                                <label
                                                                    // htmlFor="exampleInputEmail2"
                                                                    className="form-label inline-block mb-1 text-black font-light font-sans"
                                                                >
                                                                    <h3 className="text-base"> Nama Promo</h3>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control w-56
                                                                        block
                                                                    
                                                                        px-3
                                                                        py-1.5
                                                                        text-base
                                                                        font-normal
                                                                        text-gray-700
                                                                        bg-white bg-clip-padding
                                                                        border border-solid 
                                                                        rounded
                                                                        transition
                                                                        ease-in-out
                                                                        m-0
                                                                        focus:text-gray-700 focus:bg-white focus:border-[#C78342] focus:outline-[#C78342]"
                                                                    // id="exampleInputName"
                                                                    aria-describedby="nameHelp"
                                                                    placeholder=""
                                                                    value={namaPromo} onChange={onChangeNamaPromo}
                                                                />
                                                            </div>
                                                        </Form.Item>
                                                        <Form.Item name="menuId" >
                                                            <div >
                                                                <h3 className="text-base">Pilih Menu</h3>
                                                                <Select
                                                                    placeholder="---Pilih Menu"
                                                                    // defaultValue="Tersedia"
                                                                    style={{
                                                                        width: 225,
                                                                    }}
                                                                    onChange={onChangeMenuidPromo}
                                                                // value={menuPromo}
                                                                >
                                                                    {menuPromo.map((menu) => {
                                                                        return (<>
                                                                            <Option value={menu.id} > {menu.name}</Option>
                                                                        </>)

                                                                    })}
                                                                </Select>
                                                            </div>
                                                        </Form.Item>
                                                        <Form.Item name="status" >
                                                            <div >
                                                                <h3 className="text-base">Diskon</h3>
                                                                <Select
                                                                    defaultValue="All"
                                                                    style={{
                                                                        width: 225,

                                                                    }}
                                                                    onChange={onChangeDiskonPromo}

                                                                >
                                                                    <Option value={0.1}>10 %</Option>
                                                                    <Option value={0.2}>20 %</Option>
                                                                    <Option value={0.3}>30 %</Option>
                                                                    <Option value={0.4}>40 %</Option>
                                                                    <Option value={0.5}>50 %</Option>
                                                                </Select>
                                                            </div>
                                                        </Form.Item>
                                                        <Form.Item>
                                                            <div className="form-group mb-4">
                                                                <label>
                                                                    <h3 className="text-base">Dari Tanggal</h3>
                                                                </label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control
                                                                        block
                                                                        w-56
                                                                        px-3
                                                                        py-1.5
                                                                        text-base
                                                                        font-normal
                                                                        text-gray-700
                                                                        bg-white bg-clip-padding
                                                                        border border-solid 
                                                                        rounded
                                                                        transition
                                                                        ease-in-out
                                                                        m-0
                                                                        focus:text-gray-700 focus:bg-white focus:border-[#C78342] focus:outline-[#C78342]"
                                                                    id="exampleInputEmail2"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder=""
                                                                    value={datePromo} onChange={onChangeDatePromo}

                                                                />
                                                            </div>
                                                        </Form.Item>
                                                        <Form.Item>
                                                            <div className="form-group mb-4">
                                                                <label

                                                                >
                                                                    <h3 className="text-base">Sampai Tanggal</h3>
                                                                </label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control w-56
                                                                        block
                                                                        
                                                                        px-3
                                                                        py-1.5
                                                                        text-base
                                                                        font-normal
                                                                        text-gray-700
                                                                        bg-white bg-clip-padding
                                                                        border border-solid 
                                                                        rounded
                                                                        transition
                                                                        ease-in-out
                                                                        m-0
                                                                        focus:text-gray-700 focus:bg-white focus:border-[#C78342] focus:outline-[#C78342]"
                                                                    id="exampleInputEmail2"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder=""
                                                                    value={expiredPromo} onChange={onChangeExpiredPromo}
                                                                />
                                                            </div>
                                                        </Form.Item>
                                                        <Form.Item>
                                                            <div className="mb-3 w-60">
                                                                <label
                                                                    htmlFor="formFile"
                                                                    className="form-label inline-block text-gray-700"
                                                                >
                                                                    <h3 className="text-base">Upload Gambar Promo</h3>
                                                                </label>
                                                                <input
                                                                    className="form-control w-60
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
                                                                    onChange={onChangePhotoPromo}

                                                                />
                                                            </div>
                                                        </Form.Item>

                                                    </Col>
                                                    <Col span={12}>

                                                    </Col>
                                                </Form>
                                            </Row>

                                        </div>
                                    </Col>
                                </Row>
                            </Content>
                        </Modal>
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
                        <Modal
                            title="Image Promo"
                            width={370}
                            visible={visibleImage}
                            onCancel={handleCancelImage}
                            footer={null}
                        >
                            <Image loader={() => pathImage}
                                src={`https://ordercoffee-app.herokuapp.com/promo/image/${pathImage}`}
                                unoptimized={true}
                                width={250}
                                height={250}
                                className="ml-8"
                                style={{ borderRadius: 10, }} />
                        </Modal>
                    </Col>
                </Row>
                <Row justify="center" align="start" className='h-96 mt-4 '>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(deleteModal, imageModal)} dataSource={dataPromo}
                            scroll={{
                                y: 240,
                            }} />
                    </Col>
                </Row>
            </Content>
        </div >
    )
}