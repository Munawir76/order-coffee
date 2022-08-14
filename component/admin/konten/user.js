import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

const { Content } = Layout;
const { Search } = Input;

function columns(deleteModal) {
    return [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'fullname',
            key: 'fullname',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Date of brith',
            dataIndex: 'birthofdate',
            key: 'birthofdate',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
            render: (role) => {
                if (role.detail === "Customer") {
                    return (
                        <Tag color="blue">{role.detail}</Tag>
                    )
                } else if (role.detail === "Admin") {
                    return (
                        <Tag color="green" > {role.detail}</Tag>
                    )
                }
            }

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/admin/detailUser/${record.fullname}`}>
                        <Tooltip placement="left" title="Detail">
                            <Button
                                style={{ color: "#4ade80", borderColor: "#4ade80" }}
                                icon={<EyeOutlined />}
                            >
                            </Button>
                        </Tooltip>
                    </Link>
                    <Tooltip placement="right" title="Delete">
                        <Button
                            type="danger"
                            icon={<DeleteOutlined />}
                            danger={true}
                            onClick={() => deleteModal(record.id)}

                        >

                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];
}

export default function KontenUsers() {

    const [dataUser, setDataUser] = useState()

    // Modal delete
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [modalTaskId, setModalTaskId] = useState('');
    const [confirmLoading, setConfirmLoading] = useState(false);

    const deleteModal = (record) => {
        if (record) {
            setModalTaskId(record);
            setVisibleDelete(true);

        } else {
            setVisibleDelete(false)
        }

    };
    const handleOkModalDelete = () => {
        axios.delete(`https://ordercoffee-app.herokuapp.com/users/${modalTaskId}`).then(res => {

        })

        setModalText('Modal tertutup dalam 2 detik');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisibleDelete(false);
            setConfirmLoading(false);
            message.success("Delete successfull")
        }, 2000);
        // location.reload()

    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisibleDelete(false);

    }
    // console.log(handleOkModalDelete)

    async function getDataUser() {
        try {
            const getToken = localStorage.getItem("tokenAdmin")
            const decode = jwt_decode(getToken)
            // console.log(getToken);
            await axios.get('https://ordercoffee-app.herokuapp.com/users', {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                // console.log(res.data.data);
                const apiDataUser = res.data.data
                // console.log(apiDataUser)
                setDataUser(apiDataUser)
            })

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getDataUser()
    }, [])

    // console.log(dataUser);

    const onSearch = (value) => console.log(value);

    return (
        <div>
            <Content>
                <h3 className="text-lg mt-6 ml-24">Data Users/All</h3>
                <Row className='mt-6 ml-24 justify-between'>

                    <Col span={5}>
                        <Search
                            placeholder="Search Users"
                            allowClear
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row justify="center" align="start" className='h-96 mt-4 '>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns(deleteModal)} dataSource={dataUser} />
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
            </Content>
        </div>
    )
}