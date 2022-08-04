import { Space, Table, Tag, Button, Layout, Row, Col, Tooltip, Input } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import Link from "next/link";

const { Content } = Layout;

const { Search } = Input;

export default function KontenUsers() {

    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Date of brith',
            dataIndex: 'ttl',
            key: 'ttl',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <div>
                    {tags.map((tag) => {
                        let color = ''
                        if (tag === 'Admin') {
                            color = 'geekblue';
                        }
                        else if (tag === 'Customer') {
                            color = 'green';
                        }

                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </div>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link href={`/admin/${record.name}`}>
                        <Tooltip placement="left" title="Detail">
                            <Button
                                style={{ color: "#4ade80", borderColor: "#4ade80" }}
                                icon={<EyeOutlined />}
                            >
                            </Button>
                        </Tooltip>
                    </Link>
                    <Link href={`/${record.deleteUser}`}>
                        <Tooltip placement="right" title="Delete">
                            <Button
                                type="danger"
                                icon={<DeleteOutlined />}
                                danger={true}
                            >
                            </Button>
                        </Tooltip>
                    </Link>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'Bram ukraine',
            ttl: '01 januari 2022',
            email: 'bram@gmail.com',
            tags: ['Admin'],
        },
        {
            key: '2',
            name: 'Dwi Portugal',
            ttl: '09 juli 1998',
            email: 'dwigunardi@gmail.com',
            tags: ['Customer'],
        },
        {
            key: '3',
            name: 'Nabil Singapure',
            ttl: '28 agustus 1999',
            email: 'nabil@gmail.com',
            tags: ['Customer'],
        },
    ];

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
                        <Table columns={columns} dataSource={data} />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}