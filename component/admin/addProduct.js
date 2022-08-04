import MainLayout from "../admin/layout/index"
import ButtonBack from "../reusable/buttonBack"
import React from "react";
import 'antd/dist/antd.css'
import { Layout, Row, Col, Card, Input, Upload, Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

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

const menu = (
    <Menu
        onClick={handleMenuClick}
        items={[
            {
                label: 'Coffee',
                key: '1',
            },
            {
                label: 'Non Coffee',
                key: '2',
            },

        ]}
    />
);


export default function AddProduct() {
    return (
        <div>
            <MainLayout>
                <Content>
                    <Row className='mt-6 max-w-sm ml-24'>
                        <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                            <h3 className="text-lg">Tambah Product</h3>
                        </Col>
                    </Row>
                    <Row justify="center" className="h-screen">
                        <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                            <Card style={{ width: 700, height: 600, justifyContent: 'space-between', borderRadius: "3%", }}>
                                <div className="space-y-5">
                                    <Row>
                                        <Col span={22}>
                                            <h3 className="text-base">Nama Product</h3>
                                            <Input placeholder="Nama Product" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <h3 className="text-base">Deskripsi Product</h3>
                                            <TextArea rows={5} placeholder="Deskripsi" />
                                        </Col>
                                        <Col span={12}>
                                            <Upload {...props}>
                                                <Button style={{ marginTop: '30px', marginLeft: 150 }} >Change</Button>
                                            </Upload>
                                        </Col>
                                    </Row>
                                    <div >
                                        <h3 className="text-base">Jenis Variant</h3>
                                        <Dropdown overlay={menu}>
                                            <Button style={{ width: 270, textAlign: 'start' }}>
                                                <Space>
                                                    Pilih Variant
                                                </Space>
                                            </Button>
                                        </Dropdown>
                                    </div>
                                    <div>
                                        <h3 className="text-base">Status</h3>
                                        <Dropdown overlay={menu}>
                                            <Button style={{ width: 270, textAlign: 'start' }}>
                                                <Space>
                                                    Pilih Status
                                                </Space>
                                            </Button>
                                        </Dropdown>
                                    </div>
                                    <Row>
                                        <Col span={10}>
                                            <h3 className="text-base">Harga</h3>
                                            <Input maxLength={10} placeholder="Rp." />
                                        </Col>
                                    </Row>
                                    <Row justify="start ml-14 mt-2">
                                        <Col span={4} >
                                            <Button>Save</Button>
                                        </Col>
                                        <Col span={4}>
                                            <Button>Save</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </MainLayout>
        </div >
    )
}