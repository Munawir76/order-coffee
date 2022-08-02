import 'antd/dist/antd.variable.min.css'
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import { Row, Col, Card, Table, ConfigProvider, Input, Upload, Button, Space } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react'


const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',

    beforeUpload(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;

                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    ctx.fillStyle = 'red';
                    ctx.textBaseline = 'middle';
                    ctx.font = '33px Arial';
                    ctx.fillText('Ant Design', 20, 20);
                    canvas.toBlob((result) => resolve(result));
                };
            };
        });
    },
};

ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];


export default function AuthPayment() {

    return (
        <div className='min-h-screen pt-14 ml-32 mt-10' style={{ position: "relative" }}>
            <Row>
                <Col span={12}>
                    <Card style={{ width: 350, height: 500, marginTop: 10, border: 'none' }}>
                        <Table columns={columns} dataSource={data} size="small" pagination={false} showSorterTooltip={false} tableLayout='horizontal' />
                        <div className="text-center mt-24">
                            <h3 className="text-center text-[#C78342] font-bold">Upload Bukti Pembayaran</h3>
                            <div style={{ marginTop: 26 }}>
                                <Upload {...props} >
                                    <button type='button' className='bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-40 h-8' >Upload</button>
                                </Upload>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card style={{ width: 300, height: 400, borderColor: "rgba(192, 103, 17, 0.8)", marginLeft: 150, marginTop: 10, }}>
                        <h2 className="text-center text-[#C78342] font-bold">Transfer ke no Rekening berikut</h2>
                        <div className="space-y-5 mt-5">
                            <Input placeholder="Rek BCA" disabled={true} />
                            <Input placeholder="577-778-89" disabled={true} />
                            <Input placeholder="Rek Mandiri" disabled={true} />
                            <Input placeholder="12-8890-0092-989-00" disabled={true} />
                        </div>
                        <button
                            type="button"
                            className=" bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-60 h-8 ml-1 mt-16"
                        >
                            Menunggu konfirmasi Admin
                        </button>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}