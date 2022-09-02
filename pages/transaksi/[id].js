import React, { useEffect, useState } from "react"
import MainLayoutUser from '../../component/mainLayotUser'
import { useRouter } from "next/router";
import 'antd/dist/antd.variable.min.css'
import 'antd/dist/antd.css'
import { DownloadOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Space, Tooltip, Row, Col, Table, Button, Tag, Modal, message, ConfigProvider } from 'antd';
import axios from "axios";
import jwt_decode from "jwt-decode"
import Link from "next/link";
ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});
const columns = (deleteModal) => {

    return [
        {
            title: 'Customer',
            dataIndex: 'fullname',
            key: 'fullname',
            render: (_, render) => {
                const getToken = localStorage.getItem("tokenCustomer")
                const decode = jwt_decode(getToken)
                return (
                    <a>{decode?.fullname}</a>
                )

            }
        },
        //         {
        //             title: 'Product',
        //             dataIndex: 'product',
        //             key: 'product',
        //             render: (_,record) => {
        // function getCartId(){
        //     if(record)
        // }
        //                 return(<>
        //                 </>)
        //             }
        //         },
        {
            title: 'Total Harga',
            dataIndex: 'finalPrice',
            key: 'finalPrice',
            // render: (_, render) => {

            //     return (
            //         <p>Rp. {render?.transactionDetail?.map((data) => {
            //             return data.finalPrice
            //         })}</p>
            //     )
            // }
        },
        {
            title: 'Tanggal Transaksi',
            dataIndex: 'create_at',
            key: 'create_at',
        },
        {
            title: 'Status Pembayaran',
            key: 'status',
            dataIndex: 'status',
            render: (_, tags) => {
                function mapped() {

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

                return (
                    mapped()

                )
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, tags) => {
                function mapped() {

                    if (tags.status === 'Menunggu Pembayaran') {
                        return (<>
                            <Link href={`/cartDetail/${tags.id}`} >
                                <Button type="primary" className="mr-5">Bayar</Button>
                            </Link>
                            <Button
                                type="danger"
                                danger={true}
                                onClick={() => deleteModal(tags?.id)}
                            >Cancel
                            </Button>
                        </>
                        )
                    }
                    else if (tags.status === 'Menunggu Pengecekan') {
                        return (
                            <Tag color="blue" > {tags.staus}</Tag>
                        )
                    } else if (tags.status === "Sukses") {
                        return (
                            <>

                                <Button
                                    type="danger"
                                    danger={true}
                                // onClick={() => deleteModal(record.id)}
                                >Cetak Invoice
                                </Button>
                            </>

                        )
                    }
                    // console.log(mappedData);
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
    const router = useRouter();
    const { id } = router.query;
    async function getUser() {
        try {
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

    async function getDataTransaksi() {
        try {
            const getToken = localStorage.getItem("tokenCustomer")
            const decode = jwt_decode(getToken)
            // console.log(decode.id, 'ini decode cari id');
            setIdUser(decode?.id)
            await axios.get(`https://ordercoffee-app.herokuapp.com/transaction/detail`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res.data.items, 'ini res get transakasi')
                setDataTransaksi(res.data.items)

            })
        } catch (error) {

        }
    }

    // const dataSelected = idUser.filter((data) => {
    //     const datafilter = data?.id == id
    //     return datafilter
    // });

    // console.log(dataSelected, 'ini data selected')

    const handleOkModalDelete = () => {
        axios.delete(`https://ordercoffee-app.herokuapp.com/transaction/detail/${deleteId}`).then(res => {
            console.log(res, 'ini res api delete')
        })
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
            getDataTransaksi()
            message.success("Delete successfull")
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisibleDelete(false);

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

                        <Table columns={columns(deleteModal)} dataSource={dataTransaksi} style={{ marginTop: 50 }} />
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
            </MainLayoutUser>
        </div>
    )
}