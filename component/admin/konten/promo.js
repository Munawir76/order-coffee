import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal, Menu, Dropdown, Upload } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Link from "next/link";
import React, { useRef, useState } from 'react';

const { Header, Content, Sider } = Layout;

const { Search } = Input;


export default function KontenPromo() {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };


    const { Content, } = Layout;
    const { TextArea } = Input

    const props = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',

        previewFile(file) {
            console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file

            return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                method: 'POST',
                body: file,
            })
                .then((res) => res.json())
                .then(({ thumbnail }) => thumbnail);
        },
    };

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };


    const namaProduct = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: 'Red Valvet',
                    key: '1',
                },
                {
                    label: 'Taro Iced',
                    key: '2',
                },
                {
                    label: 'Machiatto',
                    key: '3',
                },
                {
                    label: 'Kopi Susu',
                    key: '4',
                },

            ]}
        />
    );

    const diskon = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: '10%',
                    key: '1',
                },
                {
                    label: '20%',
                    key: '2',
                },
                {
                    label: '30%',
                    key: '3',
                },
                {
                    label: '40%',
                    key: '3',
                },
                {
                    label: '50%',
                    key: '5',
                },

            ]}
        />
    );

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
                <Row justify='end' style={{ marginRight: 100 }}>
                    <Col>
                        <Button type="primary" onClick={showModal}>
                            + Add Promo
                        </Button>
                        <Modal
                            title="Add Product"
                            visible={visible}
                            onOk={hideModal}
                            onCancel={hideModal}
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
                                                    <div >
                                                        <h3 className="text-base">Nama Product</h3>
                                                        <Dropdown overlay={namaProduct}>
                                                            <Button style={{ width: 270, textAlign: 'start' }}>
                                                                <Space>
                                                                    Pilih Product
                                                                </Space>
                                                            </Button>
                                                        </Dropdown>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-base">Diskon</h3>
                                                        <Dropdown overlay={diskon}>
                                                            <Button style={{ width: 270, textAlign: 'start' }}>
                                                                <Space>
                                                                    Pilih Diskon
                                                                </Space>
                                                            </Button>
                                                        </Dropdown>
                                                    </div>
                                                </Col>
                                                <Col span={12}>
                                                    <Upload {...props} >
                                                        <h2 style={{ marginTop: '10px', marginLeft: 110 }}>Gambar Product</h2>
                                                        <Button style={{ backgroundColor: 'rgba(55, 217, 74, 0.8)', color: 'white', marginLeft: 125 }}>Change</Button>
                                                    </Upload>
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
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}