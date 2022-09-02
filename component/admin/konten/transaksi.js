import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, message } from 'antd';
import { FormOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { Content, } = Layout;

const { Search } = Input;

const columns = (deleteModal, approveModal) => {
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
            // render: (dataIndex) => {
            //     const slice = dataIndex;
            //     slice.slice(0, 9)
            // }
        },
        {
            title: 'Cek Pembayaran',
            // key: 'cek',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/admin/cekTransaksi/${record.id}`}>
                        <Tooltip placement="right" title="Cek Pembayaran">
                            <Button
                                style={{ color: "blue", borderColor: "blue" }}
                                icon={<FormOutlined />}
                            >
                            </Button>
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
                } else if (tags.status === 'Menunggu Pengecekan') {
                    return (
                        <Tag color="yellow" > {tags.status}</Tag>
                    )
                } else if (tags.status === "Sukses") {
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
                    <Tooltip placement="right" title="Selesai">
                        <Button
                            style={{ color: "green", borderColor: "green" }}
                            icon={<CheckOutlined />}
                            onClick={() => approveModal(record)}
                        >
                        </Button>
                    </Tooltip>
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

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 4,
    });

    //approve
    const [visibleApprove, setVisibleApprove] = useState(false);
    const [approveId, setApproveId] = useState('');


    async function getDataTransaksi(params = {}) {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction/detail`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res, 'ini res transaksi')
                setDataTransaksi(res.data.items)
            })
            setPagination({
                ...params.pagination,
                total: dataUser.length
            });

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
        setVisibleApprove(false)

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
        getDataTransaksi(pagination)
    }, [])
    // console.log(dataTransaksi, "transaksi");
    const handleTableChange = (newPagination) => {
        getDataLaporan({
            pagination: newPagination,

        });
    }


    const approveModal = (record) => {
        console.log(record, 'ini record approve')
        if (record) {
            setApproveId(record);
            setVisibleApprove(true);
        } else {
            setVisibleApprove(false)
        }
    };

    const handleOkModalUpdate = async () => {
        try {
            const update = {
                status: "Sukses",
            }
            // console.log(update, 'ini update approve)
            await axios.put(`https://ordercoffee-app.herokuapp.com/transaction/detail/${approveId?.id}`, update, {
                headers: {
                    "content-type": "application/json"
                }
            }).then(res => {
                console.log(res, 'ini res api approve')
            })
            setConfirmLoading(true);
            setTimeout(() => {
                getDataTransaksi()
                setVisibleApprove(false);
                setConfirmLoading(false);
            }, 2000);
            // location.reload()
        } catch (error) {

        }

    };


    return (
        <div>
            <Content>
                <h3 className="text-lg mt-6 ml-24">Data Transaksi/All</h3>
                <Row className='mt-6 ml-24 justify-between'>

                    <Col span={5}>
                        <Search
                            placeholder="Search Transaksi"
                            allowClear
                            size="large"
                        // onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row justify="center" align="start" className='h-96 mt-4'>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(deleteModal, approveModal)} dataSource={dataTransaksi}
                            pagination={pagination}
                            onChange={handleTableChange}
                        />
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
                <Modal
                    title="Konfirmasi Approve"
                    width={370}
                    visible={visibleApprove}
                    onOk={handleOkModalUpdate}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >

                    <p className='text-[#C78342]'>Approve Transaksi ?</p>
                </Modal>

            </Content>
        </div>
    )
}