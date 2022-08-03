import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col, Steps, Table, Button, Space, ConfigProvider } from 'antd'
import React, { useState } from 'react';
import Product1 from '../../public/images/kopisusu.jpg'
import Product2 from '../../public/images/redvalvet.jpg'
import Product3 from '../../public/images/v60.jpg'




const { Step } = Steps;

const columns = [
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Total',
        key: 'total',
        dataIndex: 'total',
    },

];
const data = [
    {
        key: '1',
        product: <div className="flex justify-start"><Image src={Product1} height={50} width={60} /><h3 className="ml-8">Kopi susu gula aren</h3></div>,
        price: 30000,
        quantity: 1,
        total: 30000,
    },
    {
        key: '2',
        product: <div className="flex justify-start"><Image src={Product2} height={50} width={60} /><h3 className="ml-8">Redvalvet</h3></div>,
        price: 20000,
        quantity: 2,
        total: 40000,
    },
    {
        key: '3',
        product: <div className="flex justify-start"><Image src={Product3} height={50} width={60} /><h3 className="ml-8">Single Origin</h3></div>,
        price: 25000,
        quantity: 1,
        total: 35000,
    },
];

export default function ListCart() {

    ConfigProvider.config({
        theme: {
            primaryColor: '#C78342',
        },
    });

    const [current, setCurrent] = useState(0);

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    return (
        <div className='min-h-screen pt-14 ml-40 mt-5' style={{ position: "relative" }}>
            <Row>
                <Col>
                    <Steps
                        type="navigation"
                        current={current}
                        onChange={onChange}
                        className="space-x-8"
                    >
                        <Step status="none" title="Cart" />
                        <Step status="none" title="Detail" />
                        <Step status="none" title="Payment" />
                    </Steps>
                </Col>
            </Row>
            <Row justify="start" align="middle" className="h-80">
                <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                    <Table columns={columns} dataSource={data} size="large" pagination={false} />
                </Col>
            </Row>
            <Row className="flex justify-end mr-48 mt-4">
                <Col >
                    <h3>Sub-total<Space>Rp. 23.000</Space></h3>
                </Col>
            </Row>
            <Row className="flex justify-end">
                <Col className="mr-48 mt-10 ">
                    <Button type="primary" shape="round" style={{ backgroundColor: '#C78342', border: "none", hover: 'none' }}>
                        Checkout
                    </Button>
                </Col>
            </Row>
        </div >
    )
}