import { Space, Table, Tag, Button, Layout, Row, Col, DatePicker, Input } from 'antd';
import { PrinterOutlined } from '@ant-design/icons'
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const { Content, } = Layout;

const onChange = (date, dateString) => {
    console.log(date, dateString);
};
const { Search } = Input;

const columns = () => {
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
            title: 'Product',
            dataIndex: 'finalPrice',
            key: 'finalPrice',
        },
        {
            title: 'Total Harga',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
        {
            title: 'Tanggal Transaksi',
            dataIndex: 'create_at',
            key: 'create_at',
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
    ];
}

export default function KontenLaporan() {

    const [dataLaporan, setDataLaporan] = useState([])
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 4,
    });

    async function getDataLaporan(params = {}) {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res, 'ini res laporan');
                setDataLaporan(res.data.data)
            })
            setPagination({
                ...params.pagination,
                total: dataLaporan.length
            });

        } catch (error) {

        }
    }
    useEffect(() => {
        getDataLaporan(pagination)
    }, [])

    const handleTableChange = (newPagination) => {
        getDataLaporan({
            pagination: newPagination,

        });
    }

    return (
        <div>
            <Content>
                <h3 className="text-lg mt-6 ml-24">Data Laporan/All</h3>
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
                <Row className='mt-2 max-w-5xl ml-24'>
                    <Col span={5}>
                        <h3 className="text-sm mt-5">Dari tanggal</h3>
                        <DatePicker onChange={onChange} />
                    </Col>
                    <Col span={5}>
                        <h3 className="text-sm mt-5 mr-30">Sampai tanggal</h3>
                        <DatePicker onChange={onChange} />
                    </Col>
                    <Col span={12} className="text-sm mt-12 text-end">
                        <Button type="primary" icon={<PrinterOutlined />} style={{ width: 120 }}>
                            Print
                        </Button>
                    </Col>
                </Row>
                <Row justify="center" align="middle" className="h-96">
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns()} dataSource={dataLaporan}
                            pagination={pagination}
                            onChange={handleTableChange}
                        />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}