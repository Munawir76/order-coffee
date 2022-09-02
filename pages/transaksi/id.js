import React, { useEffect, useState } from "react"
import MainLayoutUser from '../../component/mainLayotUser'
import { useRouter } from "next/router";
import 'antd/dist/antd.css'
import { DownloadOutlined } from '@ant-design/icons'
import { Layout, Row, Col, Table, Button, Tag } from 'antd';
import axios from "axios";


const columns = () => {
    return [
        {
            title: 'Customer',
            dataIndex: 'fullname',
            key: 'fullname',
            render: (_, render) => {
                return (
                    <a>{render.user.fullname}</a>
                )

            }
        },
        {
            title: 'Product',
            dataIndex: 'create_at',
            key: 'create_at',
        },
        {
            title: 'Total Harga',
            dataIndex: 'finalPrice',
            key: 'finalPrice',
        },

        // {
        //     title: 'Cek Pembayaran',
        //     // key: 'cek',
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <Link href={`/admin/cekTransaksi/${record.id}`}>
        //                 <Tooltip placement="right" title="Cek Pembayaran">
        //                     <Button
        //                         style={{ color: "blue", borderColor: "blue" }}
        //                         icon={<FormOutlined />}
        //                     >
        //                     </Button>
        //                 </Tooltip>
        //             </Link>
        //         </Space>
        //     ),
        // },
        {
            title: 'Status Pembayaran',
            key: 'status',
            dataIndex: 'status',
            render: (_, tags) => {
                if (tags.status === 'Menunggu Pembayaran') {
                    return (
                        <Tag color="red">{tags.status}</Tag>
                    )
                } else if (tags.status === 'Menunggu Pengecekan') {
                    return (
                        <Tag color="blue" > {tags.status}</Tag>
                    )
                } else if (tags.status === "Sukses") {
                    return (
                        <Tag color='green'>{tags.status}</Tag>
                    )
                }
            }
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <Tooltip placement="right" title="Selesai">
        //                 <Button
        //                     style={{ color: "green", borderColor: "green" }}
        //                     icon={<CheckOutlined />}
        //                     onClick={() => approveModal(record)}
        //                 >
        //                 </Button>
        //             </Tooltip>
        //             <Tooltip placement="right" title="Delete">
        //                 <Button
        //                     type="danger"
        //                     icon={<DeleteOutlined />}
        //                     danger={true}
        //                     onClick={() => deleteModal(record.id)}
        //                 >
        //                 </Button>
        //             </Tooltip>
        //         </Space>
        //     ),
        // },
    ];

}


export default function Transaksi() {

    const [dataTransaksi, setDataTransaksi] = useState([])

    async function getDataTransaksi() {
        try {
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction/detail`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res, 'ini res get transakasi')
                setDataTransaksi(res.data.items)
            })
        } catch (error) {

        }
    }

    useEffect(() => {
        getDataTransaksi()
    }, [])
    return (
        <div>
            <MainLayoutUser >
                <h2 className="mt-20 justify-center flex text-base">Status Transaksi</h2>
                <Row flex justify="center" align="middle" className=" mb-36">

                    <Col span={18} >

                        <Table columns={columns()} dataSource={dataTransaksi} style={{ marginTop: 50 }} />
                    </Col>
                </Row>
            </MainLayoutUser>
        </div>
    )
}