import 'antd/dist/antd.variable.min.css'
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import { Row, Col, Card, ConfigProvider, Input, Upload, } from 'antd'
import React, { useState } from 'react'


// const props = {
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     listType: 'picture',

//     beforeUpload(file) {
//         return new Promise((resolve) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);

//             reader.onload = () => {
//                 const img = document.createElement('img');
//                 img.src = reader.result;

//                 img.onload = () => {
//                     const canvas = document.createElement('canvas');
//                     canvas.width = img.naturalWidth;
//                     canvas.height = img.naturalHeight;
//                     const ctx = canvas.getContext('2d');
//                     ctx.drawImage(img, 0, 0);
//                     ctx.fillStyle = 'red';
//                     ctx.textBaseline = 'middle';
//                     ctx.font = '33px Arial';
//                     ctx.fillText('Ant Design', 20, 20);
//                     canvas.toBlob((result) => resolve(result));
//                 };
//             };
//         });
//     },
// };

ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});



export default function AuthPayment() {

    return (
        <div className='min-h-screen pt-14 ml-32 mt-10' style={{ position: "relative" }}>
            <Row>
                <Col span={12}>
                    <Card style={{ width: 500, height: 500, marginTop: 10, border: 'none' }}>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full">
                                            <thead className="">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Nama
                                                    </th>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Rizky
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <a href='/cartDetail' className="hover:text-[#805336] text-decoration: underline text-[#805336] text-sm font-semibold">Edit</a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left h-6"
                                                    >
                                                        Deskripsi
                                                    </th>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        jangan pakai kopi
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <a href='/cartDetail' className="hover:text-[#805336] text-decoration: underline text-[#805336] text-sm font-semibold">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                    >
                                                        Jumlah
                                                    </th>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        4
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <a href='/menuDetail' className="hover:text-[#805336] text-decoration: underline text-[#805336] text-sm font-semibold">Edit</a>
                                                    </td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-24">
                            <h3 className="text-center text-[#C78342] font-bold">Upload Bukti Pembayaran</h3>
                            <div style={{ marginTop: 26 }}>
                                {/* <Upload {...props} >
                                    <button type='button' className='bg-[#C78342] text-white font-medium rounded shadow-md hover:bg-[#805336] hover:shadow-l focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#C78342] active:shadow-lg transition duration-150 ease-in-out w-40 h-8' >Upload</button>
                                </Upload> */}
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