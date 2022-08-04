import { useRouter } from "next/router";
import MainLayout from "../../../component/admin/layout";
import ButtonBack from "../../../component/reusable/buttonBack"
import Foto1 from '../../../public/images/redvalvet.jpg'
import Image from 'next/image'
import Foto2 from '../../../public/images/vietnamdrip.jpg'
import Foto3 from '../../../public/images/taro.jpg'
import React from "react";
import 'antd/dist/antd.css'
import { Layout, Row, Col, Card, Input, Upload, Button, Dropdown, Menu, message, Space } from 'antd';


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

const varian = (
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
const status = (
    <Menu
        onClick={handleMenuClick}
        items={[
            {
                label: 'Tersedia',
                key: '1',
            },
            {
                label: 'Tidak Tersedia',
                key: '2',
            },

        ]}
    />
);



export default function AddProduct() {
    const data = [
        {
            key: '1',
            product: 'Redvalvet',
            varian: 'Non Coffee',
            harga: 'Rp. 25.000',
            foto: <Image src={Foto1} width={250} height={220} style={{ borderRadius: "5%" }} />,
            tags: ['Tersedia'],
            desk: 'Redvalvet terbuat dari djsao slfjn sjh sjhao sjbhfioau skfha aksf b shf aoshf '
        },
        {
            key: '2',
            product: 'Vietnam Drip',
            varian: 'Coffee',
            harga: 'Rp. 20.000',
            foto: <Image src={Foto2} width={250} height={220} />,
            tags: ['Tidak Tersedia'],
        },
        {
            key: '3',
            product: 'Taro iced',
            varian: 'Non Coffee',
            harga: 'Rp. 25.000',
            foto: <Image src={Foto3} width={250} height={220} />,
            tags: ['Tersedia'],
        },
    ];

    const router = useRouter();
    const { product } = router.query;
    const dataSelected = data.find((data) => data.product == product);
    return (
        <div>
            <MainLayout>
                <Content>
                    <Row className='mt-6 max-w-sm ml-24'>
                        <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                            <h3 className="text-lg">Edit Product</h3>
                        </Col>
                    </Row>
                    <Row justify="center" className="h-screen">
                        <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                            <Card style={{ width: 700, height: 600, justifyContent: 'space-between', borderRadius: "3%", }}>
                                <div className="space-y-5">
                                    <Row>
                                        <Col span={22}>
                                            <h3 className="text-base">Nama Product</h3>
                                            <Input placeholder={dataSelected?.product} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <h3 className="text-base">Deskripsi Product</h3>
                                            <TextArea rows={5} placeholder={dataSelected?.desk} />
                                        </Col>
                                        <Col span={12}>
                                            <Upload {...props} >
                                                <h2 style={{ marginTop: '30px', marginLeft: 150 }}>Gambar Product</h2>
                                                <Button style={{ backgroundColor: 'rgba(55, 217, 74, 0.8)', color: 'white', marginLeft: 165 }}>Change</Button>
                                            </Upload>
                                        </Col>
                                    </Row>
                                    <div >
                                        <h3 className="text-base">Jenis Variant</h3>
                                        <Dropdown overlay={varian}>
                                            <Button style={{ width: 270, textAlign: 'start' }}>
                                                <Space>
                                                    Pilih Variant
                                                </Space>
                                            </Button>
                                        </Dropdown>
                                    </div>
                                    <div>
                                        <h3 className="text-base">Status</h3>
                                        <Dropdown overlay={status}>
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
                                            <Input maxLength={10} placeholder={dataSelected?.harga} />
                                        </Col>
                                    </Row>
                                    <Row className="justify-start ml-8" >
                                        <Col span={5}>
                                            <Button style={{ backgroundColor: 'rgba(15, 110, 248, 0.8)', color: 'white', }}>Simpan</Button>
                                        </Col>
                                        <Col span={5} >
                                            <ButtonBack />
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