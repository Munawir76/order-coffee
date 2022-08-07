import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.variable.min.css'
import { Button, Col, Layout, Row, ConfigProvider, Space } from 'antd';
import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import logo from "../../../public/images/logo.png"
import { useRouter } from "next/router";
import { useEffect } from "react";

const { Header } = Layout;
ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});


const NavbarAdmin = () => {

    return (
        <div>
            <Header
                className="w-full drop-shadow-md text-lg"
                style={{ backgroundColor: "white" }}>
                <Row justify='space-between' align='middle' className='w-full'>
                    <Col className="flex md:block" >
                        <Image src={logo} height={40} width={150} style={{}} />
                    </Col>
                    <Col>
                        <div className='text-center text-black space-x-2'>
                            <UserOutlined style={{ fontSize: 30, }} className='mb-12' />
                            <Space className='text-center'>Admin</Space>
                        </div>
                    </Col>
                </Row>
            </Header>
        </div>
    );
};

export default NavbarAdmin;

