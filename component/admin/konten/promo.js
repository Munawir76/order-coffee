import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Link from "next/link";
import React, { useRef, useState } from 'react';

const { Header, Content, Sider } = Layout;

const { Search } = Input;
export default function KontenPromo() {

    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Promo',
            dataIndex: 'promo',
            key: 'promo',
        },
        {
            title: 'Diskon',
            dataIndex: 'diskon',
            key: 'diskon',
        },
        {
            title: 'Status',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <div>
                    {tags.map((tag) => {
                        let color = ''
                        if (tag === 'Tersedia') {
                            color = 'green';
                        }
                        else if (tag === 'Tidak Tersedia') {
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
            title: 'Delete',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
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
            promo: 'Kopi Susu Gula Aren',
            diskon: '20%',
            tags: ['Tersedia'],
        },
        {
            key: '2',
            promo: 'Single Origin',
            diskon: '25%',
            tags: ['Tersedia'],
        },
        {
            key: '3',
            promo: 'Capucino',
            diskon: '20%',
            tags: ['Tidak Tersedia'],
        },
    ];

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
                <Row justify="center" align="middle" className='h-96 '>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}