import { Space, Table, Tag, Button, Layout, Row, Col, DatePicker, Input } from 'antd';
import React, { useRef, useState } from 'react';
const { Content, } = Layout;

const onChange = (date, dateString) => {
    console.log(date, dateString);
};
const { Search } = Input;
export default function KontenLaporan() {


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
                    <h3 className="text-lg">Data Laporan/All</h3>
                    <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                        <Search
                            placeholder="Search Promo"
                            allowClear
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Row className='mt-6 w-full'>
                        <Col span={12}>
                            <h3 className="text-sm mt-5">Dari tanggal</h3>
                            <DatePicker onChange={onChange} />
                        </Col>
                        <Col span={12}>
                            <h3 className="text-sm mt-5">Sampai tanggal</h3>
                            <DatePicker onChange={onChange} />
                        </Col>
                    </Row>
                </Row>
                <Row justify="center" align="middle" className="h-80">
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}