import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input } from 'antd';
import { FormOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import Link from "next/link";
import React, { useRef, useState } from 'react';

const { Content, } = Layout;

const { Search } = Input;
export default function KontenTransaksi() {

    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Tanggal Transaksi',
            dataIndex: 'tgltransaksi',
            key: 'tgltransaksi',
        },
        {
            title: 'Cek Pembayaran',
            key: 'cek',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/${record.deleteUser}`}>
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
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <div>
                    {tags.map((tag) => {
                        let color = ''
                        if (tag === 'Selesai') {
                            color = 'green';
                        }
                        else if (tag === 'Menunggu') {
                            color = 'blue';
                        }
                        else if (tag === 'Belum') {
                            color = 'red';
                        }

                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </div>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/${record.deleteUser}`}>
                        <Tooltip placement="right" title="Selesai">
                            <Button
                                style={{ color: "blue", borderColor: "blue" }}
                                icon={<CheckOutlined />}
                            >
                            </Button>
                        </Tooltip>
                    </Link>
                    <Link href={`/${record.deleteUser}`}>
                        <Tooltip placement="right" title="Delete">
                            <Button
                                type="danger"
                                icon={<DeleteOutlined />}
                                danger={true}
                            >
                            </Button>
                        </Tooltip>
                    </Link>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            customer: 'Dwi GN',
            product: 'Kopi Susu',
            tgltransaksi: '20 juli 2022',
            tags: ['Selesai'],
        },
        {
            key: '2',
            customer: 'Nabil',
            product: 'Kopi Susu',
            tgltransaksi: '20 juli 2022',
            tags: ['Menunggu'],
        },
        {
            key: '3',
            customer: 'Bram',
            product: 'Kopi Susu',
            tgltransaksi: '20 juli 2022',
            tags: ['Belum'],
        },
    ];

    const onSearch = (value) => console.log(value);
    return (
        <div>
            <Content>
                <Row className='mt-6 max-w-sm ml-24'>
                    <h3 className="text-lg">Data Transaksi/All</h3>
                    <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                        <Search
                            placeholder="Search Promo"
                            allowClear
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96 '>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}