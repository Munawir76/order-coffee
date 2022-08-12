import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Select, Dropdown, Upload, Form, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const { Header, Content, Sider } = Layout;
const { Option } = Select
const { Search } = Input;



function columns(deleteModal) {
    return [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Promo',
            dataIndex: 'name',
            key: 'name',
        },
        // {
        //     title: 'Varian',
        //     dataIndex: 'varian',
        //     key: 'varian',
        // },
        {
            title: 'Diskon',
            dataIndex: 'discount',
            key: 'discount',
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
                        <Tag color="blue">Tersedia</Tag>
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
                        <Tag color="green">{expired}</Tag>
                    )
                }
            }

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
                        // onClick={() => deleteModal(record.name)}
                        >
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];
}

export default function KontenPromo() {

    const [dataPromo, setDataPromo] = useState()
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
                const apiDataPromo = res.data.data
                // console.log(apiDataProduct)
                setDataPromo(apiDataPromo[0])
            })
        } catch (error) {
            console.error(error);
        }
    }
    async function getMenuPromo() {
        try {
            await axios.get("https://ordercoffee-app.herokuapp.com/menu", {

            }).then(res => {
                // console.log(res.data.data[0])
                setMenuPromo(res.data.data[0])
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

    // const onChangeEmail = (e) => {
    //     const value = e.target.value
    //     setEmail(value)
    // }

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
                message.success("Successfull Create promo")
            })
        } catch (error) {
            // console.log(error, "ini error");
            message.error("failed create promo")
        }
    }

    const onSearch = (value) => console.log(value);

    // console.log(menuPromo);

    return (
        <div>
            <Content>
                <Row className='mt-6 max-w-sm ml-24'>
                    <h3 className="text-lg">Data Promo/All</h3>
                    <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                        <Search
                            placeholder="Search Promo"
                            allowClear
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row justify='end' style={{ marginRight: 100 }}>
                    <Col>
                        <Button type="primary" onClick={showModalAddPromo}>
                            + Add Promo
                        </Button>
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
                                <Row justify="center" className="h-FULL">
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
                                                                    Nama Promo
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
                                                                    <Option value="10 %">10 %</Option>
                                                                    <Option value="20 %">20 %</Option>
                                                                    <Option value="30 %">30 %</Option>
                                                                    <Option value="40 %">40 %</Option>
                                                                    <Option value="50 %">50 %</Option>
                                                                </Select>
                                                            </div>
                                                        </Form.Item>
                                                        <Form.Item>
                                                            <div className="form-group mb-4">
                                                                <label
                                                                    // htmlFor="exampleInputEmail2"
                                                                    className="form-label inline-block mb-1 text-black font-light font-sans"
                                                                >
                                                                    Dari Tanggal
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
                                                                    // htmlFor="exampleInputEmail2"
                                                                    className="form-label inline-block mb-1 text-black font-light font-sans"
                                                                >
                                                                    Sampai Tanggal
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

                                                    </Col>
                                                    <Col span={12}>
                                                        <div className="flex justify-center">
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
                                                                    onChange={onChangePhotoPromo}

                                                                />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Form>
                                            </Row>

                                        </div>
                                    </Col>
                                </Row>
                            </Content>
                        </Modal>
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96 '>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(deleteModal)} dataSource={dataPromo} />
                    </Col>
                </Row>
            </Content>
        </div >
    )
}