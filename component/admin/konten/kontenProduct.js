import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, AutoComplete, Input } from 'antd';
import { EyeOutlined, DeleteOutlined, FormOutlined } from '@ant-design/icons';
import Link from "next/link";
import React, { useRef, useState } from 'react';
import Image from 'next/image'
import ModalAdd from "./addProduct"
import Foto1 from "../../../public/images/redvalvet.jpg"
import Foto2 from "../../../public/images/vietnamdrip.jpg"
import Foto3 from "../../../public/images/taro.jpg"

const { Header, Content, Sider } = Layout;

const { Search } = Input;
export default function KontenProduct() {

    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Varian',
            dataIndex: 'varian',
            key: 'varian',
        },
        {
            title: 'Harga',
            dataIndex: 'harga',
            key: 'harga',
        },
        {
            title: 'Foto',
            dataIndex: 'foto',
            key: 'foto',
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
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/admin/${record.name}`}>
                        <Tooltip placement="left" title="Detail">
                            <Button
                                style={{ color: "blue", borderColor: "blue" }}
                                icon={<FormOutlined />}
                            >
                            </Button>
                        </Tooltip>
                    </Link>
                    <Link href={`/admin/${record.name}`}>
                        <Tooltip placement="left" title="Detail">
                            <Button
                                style={{ color: "#4ade80", borderColor: "#4ade80" }}
                                icon={<EyeOutlined />}
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
            product: 'Redvalvet',
            varian: 'Non Coffee',
            harga: 'Rp. 25.000',
            foto: <Image src={Foto1} width={60} height={50} />,
            tags: ['Tersedia'],
        },
        {
            key: '2',
            product: 'Vietnam Drip',
            varian: 'Coffee',
            harga: 'Rp. 20.000',
            foto: <Image src={Foto2} width={60} height={50} />,
            tags: ['Tidak Tersedia'],
        },
        {
            key: '3',
            product: 'Taro iced',
            varian: 'Non Coffee',
            harga: 'Rp. 25.000',
            foto: <Image src={Foto3} width={60} height={50} />,
            tags: ['Tersedia'],
        },
    ];
    const [isVisibleModalAdd, setIsVisibleModalAdd] = useState(false)
    const onSearch = (value) => console.log(value);
    return (
        <div>
            <Content>
                <Row className='mt-6 max-w-sm ml-24'>
                    <h3 className="text-lg">Data Product/All</h3>
                    <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                        <Search
                            placeholder="Search Product"
                            allowClear
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                    <Col>
                        <ModalAdd isModalVisible={isVisibleModalAdd} handleCancel={() => setIsVisibleModalAdd(false)} />
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96 mt-6'>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>


            </Content>
        </div>
    )
}