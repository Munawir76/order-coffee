import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col, Steps, Table, } from 'antd'
import React, { useState } from 'react';
import Product1 from '../../public/images/kopisusu.jpg'


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
        product: <Image src={Product1} height={50} width={60} />,
        price: "Rp. 30.000",
        quantity: 'New York No. 1 Lake Park',
        total: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        price: 42,
        quantity: 'London No. 1 Lake Park',
        total: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        price: 32,
        quantity: 'Sidney No. 1 Lake Park',
        total: ['cool', 'teacher'],
    },
];

export default function ListCart() {
    const [current, setCurrent] = useState(0);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    return (
        <div className='min-h-screen pt-14 ml-40 mt-5' style={{ position: "relative" }}>
            <Row className="mb-2">
                <Col>
                    <Steps
                        type="navigation"
                        current={current}
                        onChange={onChange}
                        className="site-navigation-steps hover:text-slate-700"
                    >
                        <Step status="none" title="Process" icon="none" />
                        <Step status="none" title="Done" icon="none" />

                    </Steps>
                </Col>
            </Row>
            <Row justify="start" align="middle" className="h-80">
                <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                    <Table columns={columns} dataSource={data} size="large" />
                </Col>
            </Row>
        </div>
    )
}