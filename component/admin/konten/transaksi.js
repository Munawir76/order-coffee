import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, message } from 'antd';
import { FormOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { Content, } = Layout;

const { Search } = Input;

const columns = (deleteModal) => {
    return [
        {
            title: 'Customer',
            dataIndex: 'fullname',
            key: 'fullname',
            render: (_, render) => {
                return (
                    <a>{render.user.fullname}</a>
                )

            }
        },
        {
            title: 'Total Harga',
            dataIndex: 'finalPrice',
            key: 'finalPrice',
        },
        {
            title: 'Tanggal Transaksi',
            dataIndex: 'create_at',
            key: 'create_at',
        },
        {
            title: 'Cek Pembayaran',
            // key: 'cek',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/${record.id}`}>
                        <Tooltip placement="right" title="Cek Pembayaran">
                            <Link href="/admin/cekTransaksi">
                                <Button
                                    style={{ color: "blue", borderColor: "blue" }}
                                    icon={<FormOutlined />}
                                >
                                </Button>
                            </Link>
                        </Tooltip>
                    </Link>
                </Space>
            ),
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, tags) => {
                if (tags.status === 'Menunggu Pembayaran') {
                    return (
                        <Tag color="blue">{tags.status}</Tag>
                    )
                } else if (tags.status === 'Belum Bayar') {
                    return (
                        <Tag color="yellow" > {tags.status}</Tag>
                    )
                } else if (tags.status === "Sudah Bayar") {
                    return (
                        <Tag color='green'>{tags.status}</Tag>
                    )
                }
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/${record}`}>
                        <Tooltip placement="right" title="Selesai">
                            <Button
                                style={{ color: "green", borderColor: "green" }}
                                icon={<CheckOutlined />}
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



export default function KontenTransaksi() {

    const [dataTransaksi, setDataTransaksi] = useState([])
    // delete
    const [deleteId, setDeleteId] = useState()
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);



    async function getDataTransaksi() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction/detail`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res, 'ini res transaksi')
                setDataTransaksi(res.data.data)
            })
        } catch (error) {

        }
    }

    const handleOkModalDelete = () => {
        axios.delete(`https://ordercoffee-app.herokuapp.com/transaction/detail/${deleteId}`).then(res => {
            console.log(res, 'ini res api delete')
        })
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
            getDataTransaksi()
            message.success("Delete successfull")
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisibleDelete(false);
    }

    const deleteModal = (record) => {
        console.log(record, 'ini record value delete')
        if (record) {
            setDeleteId(record);
            setVisibleDelete(true);
        } else {
            setVisibleDelete(false)
        }
    };


    useEffect(() => {
        getDataTransaksi()
    }, [])
    // console.log(dataTransaksi, "transaksi");
    return (
        <div>
            <Content>
                <h3 className="text-lg mt-6 ml-24">Data Transaksi/All</h3>
                <Row className='mt-6 ml-24 justify-between'>

                    <Col span={5}>
                        <Search
                            placeholder="Search Promo"
                            allowClear
                            size="large"
                        // onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row justify="center" align="start" className='h-96 mt-4'>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(deleteModal)} dataSource={dataTransaksi} />
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