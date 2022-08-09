import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input, Modal } from 'antd';
import { EyeOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

const { confirm } = Modal;
const { Content } = Layout;
const { Search } = Input;

const showDeleteConfirm = () => {
    confirm({
        title: 'Yakin hapus user ?',
        icon: <ExclamationCircleOutlined />,
        // content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',

        onOk() {
            console.log('OK');
        },

        onCancel() {
            console.log('Cancel');
        },
    });
};

export default function KontenUsers() {

    const columns = [
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
                            onClick={showDeleteConfirm}
                        // onClick={() => { onDeleteUser(record) }}
                        >

                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const [dataUser, setDataUser] = useState()

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

    console.log(dataUser);

    const onSearch = (value) => console.log(value);

    return (
        <div>
            <Content>
                <Row className='mt-6 max-w-sm ml-24'>
                    <h3 className="text-lg">Data Users/All</h3>
                    <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                        <Search
                            placeholder="Search Users"
                            allowClear
                            size="large"
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <Row justify="center" align="middle" className='h-96 '>
                    <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                        <Table columns={columns} dataSource={dataUser} />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}