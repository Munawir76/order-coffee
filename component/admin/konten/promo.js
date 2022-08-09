import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Select, Dropdown, Upload, Form } from 'antd';
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
                console.log(d)
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
                console.log(d)
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

    // add promo
    const [visibleAddPromo, setVisibleAddPromo] = useState(false);
    const [menuPromo, setMenuPromo] = useState('')
    const [diskonPromo, setDiskonPromo] = useState('')

    // delete
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [modalTaskId, setModalTaskId] = useState('');
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModalAddPromo = () => {
        setVisibleAddPromo(true);
    };

    const hideModalAddPromo = () => {
        setVisibleAddPromo(false);
    };

    const onChangeDiskonPromo = (e) => {
        const value = e.target.value
        setNamaDiskonPromo(value)
        // console.log(value)
    }

    const onChangeMenuPromo = (e) => {
        const value = e.target.value
        setNamaMenuPromo(value)
        // console.log(value)
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
                console.log(res.data.data)
                const apiDataPromo = res.data.data
                // console.log(apiDataProduct)
                setDataPromo(apiDataPromo[0])
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDataPromo()
    }, [])

    // console.log(dataPromo)

    const onSearch = (value) => console.log(value);
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
                            title="Add Product"
                            visible={visibleAddPromo}
                            onOk={hideModalAddPromo}
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
                                                <Col span={12} className="space-y-6">
                                                    <Form >

                                                        <Form.Item name="name" >
                                                            <div >
                                                                <h3 className="text-base">Nama Menu</h3>
                                                                <Select
                                                                    // defaultValue="Tersedia"
                                                                    style={{
                                                                        width: 120,
                                                                    }}
                                                                    onChange={onChangeMenuPromo}
                                                                    value={menuPromo}
                                                                >
                                                                    <Option value="">10 %</Option>
                                                                    <Option value="">20 %</Option>
                                                                    <Option value="">30 %</Option>
                                                                    <Option value="">40 %</Option>
                                                                    <Option value="">50 %</Option>
                                                                </Select>
                                                            </div>
                                                        </Form.Item>
                                                        <Form.Item name="status" >
                                                            <div >
                                                                <h3 className="text-base">Diskon</h3>
                                                                <Select
                                                                    // defaultValue="Tersedia"
                                                                    style={{
                                                                        width: 120,
                                                                    }}
                                                                    onChange={onChangeDiskonPromo}
                                                                    value={diskonPromo}
                                                                >
                                                                    <Option value="">10 %</Option>
                                                                    <Option value="">20 %</Option>
                                                                    <Option value="">30 %</Option>
                                                                    <Option value="">40 %</Option>
                                                                    <Option value="">50 %</Option>
                                                                </Select>
                                                            </div>
                                                        </Form.Item>
                                                    </Form>
                                                </Col>
                                                <Col span={12}>
                                                    {/* <Upload {...props} >
                                                        <h2 style={{ marginTop: '10px', marginLeft: 110 }}>Gambar Product</h2>
                                                        <Button style={{ backgroundColor: 'rgba(55, 217, 74, 0.8)', color: 'white', marginLeft: 125 }}>Change</Button>
                                                    </Upload> */}
                                                </Col>

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
        </div>
    )
}