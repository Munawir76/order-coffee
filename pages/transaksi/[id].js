import React, { useEffect, useState } from "react"
import MainLayoutUser from '../../component/mainLayotUser'
import { useRouter } from "next/router";
import 'antd/dist/antd.variable.min.css'
import 'antd/dist/antd.css'
import { DownloadOutlined, CheckCircleOutlined, InfoCircleOutlined, CloseSquareOutlined, SnippetsOutlined, EyeOutlined, CreditCardOutlined, DeleteOutlined } from '@ant-design/icons'
import { Space, Tooltip, Row, Col, Table, Button, Tag, Modal, message, ConfigProvider } from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode"
import Link from "next/link";


ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});
const columns = (deleteModal, suksesModal, waitModal, idUser) => {


    return [
        {
            title: 'Customer',
            dataIndex: 'fullname',
            key: 'fullname',
            render: (_, record) => {
                const getToken = localStorage.getItem("tokenCustomer")
                let decode;
                let guest;
                function check() {
                    if (getToken) {
                        decode = jwt_decode(getToken)
                        return decode.fullname
                    } else {
                        return "Guest"
                    }
                }

                return (
                    <p key={record.id}>{check()}</p>
                )
            }
        },
        {
            title: 'Total Harga',
            dataIndex: 'transactionDetail',
            key: 'transactionDetail',
            render: (_, render) => {
                const rupiah = (number) => {
                    return new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR"
                    }).format(number);
                }
                return (

                    <div key={render.id}>
                        <p>{rupiah(render.finalPrice)}</p>
                    </div>
                )
            }

        },
        {
            title: 'Tanggal Transaksi',
            dataIndex: 'create_at',
            key: 'create_at',
            render: (record) => {
                const potong = record.slice(0, 10)
                return potong
            }
        },
        {
            title: 'Status Pembayaran',
            key: 'transactionDetail',
            dataIndex: 'transactionDetail',
            render: (_, tags) => {
                // return (
                function Check() {
                    if (tags?.status == 'Menunggu Pembayaran') {
                        return (
                            <Tag color="red">Menunggu Pembayaran</Tag>
                        )
                    } else if (tags?.status === 'Menunggu Pengecekan') {
                        return (
                            <Tag color="blue" >Sedang diverifikasi</Tag>
                        )
                    } else if (tags?.status === "Sukses") {
                        return (
                            <Tag color='green'>Pembayaran Berhasil</Tag>
                        )
                    } else if (tags?.status === "Ditolak") {
                        return (
                            <Tag color='red'>Dibatalkan</Tag>
                        )
                    }
                }
                return (
                    Check()
                )
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, tags) => {
                console.log(idUser, 'ini tags record');
                function mapped() {
                    if (tags?.status === 'Menunggu Pembayaran') {
                        return (<div key={tags.id}>
                            <Link href={`/cartDetail/${idUser.id}`} >
                                <Tooltip placement="top" title="bayar">

                                    <Button className="mr-2" style={{ color: 'blue', borderColor: "blue" }}
                                        icon={<CreditCardOutlined />}></Button>

                                </Tooltip>
                            </Link>
                            <Tooltip placement="right" title="cancel">
                                <Button
                                    type="danger"
                                    danger={true}
                                    onClick={() => deleteModal(tags?.id)}
                                    icon={<CloseSquareOutlined />}
                                >
                                </Button>
                            </Tooltip>
                        </div>
                        )
                    }
                    else if (tags.status === 'Menunggu Pengecekan') {
                        return (
                            <Tooltip placement="right" title="detail">
                                <Button className="mr-2" style={{ color: 'rgba(168, 109, 15, 0.8)', borderColor: 'rgba(168, 109, 15, 0.8)' }}
                                    icon={<EyeOutlined />}
                                    onClick={() => waitModal(tags?.id)}></Button>
                            </Tooltip>
                        )
                    } else if (tags.status === "Sukses") {
                        return (
                            <div key={tags.id}>
                                <Tooltip placement="right" title="detail">
                                    <Button className="mr-2" style={{ color: 'rgba(168, 109, 15, 0.8)', borderColor: 'rgba(168, 109, 15, 0.8)' }}
                                        icon={<EyeOutlined />}
                                        onClick={() => suksesModal(tags?.id)}></Button>
                                </Tooltip>

                                <Tooltip placement="top" title="invoice">
                                    <Link href={`/invoice/${tags?.id}`} >
                                        <Button className="mr-2" style={{ color: 'green', borderColor: "green" }}
                                            icon={<SnippetsOutlined />}></Button>
                                    </Link>
                                </Tooltip>

                                <Tooltip placement="right" title="delete">
                                    <Button
                                        type="danger"
                                        danger={true}
                                        // style={{ backgroundColor: '' }}
                                        onClick={() => deleteModal(tags?.id)}
                                        icon={<DeleteOutlined />}>
                                    </Button>
                                </Tooltip>

                            </div>
                        )
                    } else if (tags.status === 'Ditolak') {
                        return (
                            <div key={tags.id}>
                                <Tooltip placement="right" title="detail">
                                    <Button className="mr-2" style={{ color: 'rgba(168, 109, 15, 0.8)', borderColor: 'rgba(168, 109, 15, 0.8)' }}
                                        // icon={<EyeOutlined />}
                                        onClick={() => suksesModal(tags?.id)}>

                                    </Button>
                                </Tooltip>
                            </div>
                        )
                    }
                }

                return (
                    mapped()
                )
            }
        },
    ];

}


export default function Transaksi() {

    const [dataTransaksi, setDataTransaksi] = useState([])
    const [idUser, setIdUser] = useState([])

    // delete
    const [deleteId, setDeleteId] = useState()
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [visibleSukses, setVisibleSukses] = useState(false);

    const [visibleWait, setVisibleWait] = useState(false);

    const router = useRouter();
    const { id } = router.query;


    async function getUser() {
        try {
            const getToken = localStorage.getItem("idCart")
            await axios.get(`https://ordercoffee-app.herokuapp.com/users/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res.data.data, 'ini res user')
                setIdUser(res.data.data)
                setDataTransaksi(res.data.data.transactionDetail)
            })
        } catch (error) {

        }
    }

    const handleOkModalDelete = () => {
        axios.delete(`https://ordercoffee-app.herokuapp.com/transaction/detail/${deleteId}`).then(res => {
            console.log(res, 'ini res api delete')
        })
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
            // getDataTransaksi()
            message.success("Delete successfull")
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisibleDelete(false);
        setVisibleSukses(false);
        setVisibleWait(false);

    }

    const deleteModal = (tags) => {
        console.log(tags, 'ini record value delete')
        if (tags) {
            setDeleteId(tags);
            setVisibleDelete(true);
        } else {
            setVisibleDelete(false)
        }
    };

    const suksesModal = (tags) => {
        console.log(tags, 'ini record value delete')
        if (tags) {

            setVisibleSukses(true);
        } else {
            setVisibleSukses(false)
        }
    };

    const waitModal = (tags) => {
        console.log(tags, 'ini record value delete')
        if (tags) {

            setVisibleWait(true);
        } else {
            setVisibleWait(false)
        }
    };

    useEffect(() => {
        // getDataTransaksi()
        getUser()
    }, [])

    return (
        <div>
            <MainLayoutUser >
                <h2 className="mt-20 justify-center flex text-base">Status Transaksi</h2>
                <Row flex justify="center" align="middle" className=" mb-36">
                    <Col span={18} >
                        <Table columns={columns(deleteModal, suksesModal, waitModal, idUser)} dataSource={dataTransaksi} style={{ marginTop: 50 }} />
                    </Col>
                </Row>
                <Modal
                    title="Konfirmasi Hapus Menu"
                    width={370}
                    visible={visibleDelete}
                    onOk={handleOkModalDelete}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <p className='text-[#C78342]'>Yakin ingin menghapus ?</p>

                </Modal>
                <Modal
                    title="Status Pembayaran"
                    width={370}
                    visible={visibleSukses}
                    onCancel={handleCancel}
                    footer={false}
                >
                    <div>
                        <div >
                            <Row flex justify="center">
                                <Col className="text-center space-y-4">
                                    <div style={{ fontSize: '65pt', color: 'green', }}> <CheckCircleOutlined /></div>
                                    <h2 className="font-bold text-lg">Pembayaran Anda Berhasil</h2>
                                    <h3 style={{ marginBottom: 50 }}>Terimakasih telah melakukan Pembayaran. Selamat Menikmati Coffee Kami.</h3>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Modal>
                <Modal
                    title="Status Pembayaran"
                    width={370}
                    visible={visibleWait}
                    onCancel={handleCancel}
                    footer={false}
                >
                    <div>
                        <div >
                            <Row flex justify="center">
                                <Col className="text-center space-y-4">
                                    <div style={{ fontSize: '65pt', color: 'rgba(52, 139, 208, 0.8)', }}> <InfoCircleOutlined /></div>
                                    <h2 className="font-bold text-lg">Sedang diverifikasi</h2>
                                    <h3 style={{ marginBottom: 50 }}>Terimakasih telah melakukan Pembayaran. Mohon bersabar Pembayaran Anda sedang Kami verifikasi</h3>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Modal>
            </MainLayoutUser>
        </div>
    )
}