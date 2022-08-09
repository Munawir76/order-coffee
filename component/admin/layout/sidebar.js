import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css'
import 'tailwindcss/tailwind.css'
import { Layout, Menu, ConfigProvider, Button } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
    ShoppingOutlined,
    NotificationOutlined,
    CopyOutlined,
    DesktopOutlined,
    TeamOutlined,
    ImportOutlined,
    SwapOutlined,
    BgColorsOutlined
} from '@ant-design/icons';
import Link from 'next/link';


const { Sider } = Layout;
ConfigProvider.config({
    theme: {
        primaryColor: '#C78342',
    },
});



export default function Sidebar() {

    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }


    const [isLogged, setLogged] = useState()
    const router = useRouter();

    async function validate() {
        try {
            const token = await localStorage.getItem('tokenAdmin')
            const decode = await parseJwt(token)

            if (token) {
                setLogged(true)
            } else {
                setLogged(false)
            }


        } catch (error) {

        }
    }


    async function buttonLogout() {
        try {
            localStorage.clear()
            window.alert("Logout")
            router.push("/login")

        } catch (error) {

        }
    }

    const [collapsed, setCollapsed] = useState(false);
    const items = [
        {
            label: <Link href="/admin/dashboard" ><a className='w-full text-lg ' > Dashboard</a></Link>, key: "dashboard", icon: <DesktopOutlined />,
            get: function getItem(label, key, icon, children) {
                return {
                    key,
                    icon,
                    children,
                    label,
                };
            }
        },
        {
            label: <Link href="/admin/users" ><a className='w-full text-lg'>Users</a></Link>, key: "users", icon: <TeamOutlined />,
            get: function getItem(label, key, icon, children) {
                return {
                    key,
                    icon,
                    children,
                    label,
                };
            }
        },
        {
            label: <Link href="/admin/product"><a className='w-full text-lg '>Product</a></Link>, key: "product", icon: <ShoppingOutlined />,
            get: function getItem(label, key, icon, children) {
                return {
                    key,
                    icon,
                    children,
                    label,
                };
            }
        },
        {
            label: <Link href="/admin/promo"><a className='w-full text-lg '>Promo</a></Link>, key: "promo", icon: <NotificationOutlined />,
            get: function getItem(label, key, icon, children) {
                return {
                    key,
                    icon,
                    children,
                    label,
                };
            }
        },
        {
            label: <Link href="/admin/transaksi"><a className='w-full text-lg '>Transaksi</a></Link>, key: "transaksi", icon: <SwapOutlined />,
            get: function getItem(label, key, icon, children) {
                return {
                    key,
                    icon,
                    children,
                    label,
                };
            }
        },
        {
            label: <Link href="/admin/laporan"><a className='w-full text-lg '>Laporan</a></Link>, key: "laporan", icon: <CopyOutlined />,
            get: function getItem(label, key, icon, children) {
                return {
                    key,
                    icon,
                    children,
                    label,
                };
            }
        },
        {
            label: <button onClick={buttonLogout}><a className='w-full text-lg '>Logout</a></button>, key: "logout", icon: <ImportOutlined />,
            get: function getItem(label, key, icon, children) {
                return {
                    key,
                    icon,
                    children,
                    label,
                };
            }
        },
    ];

    useEffect(() => {

        validate()

    }, []);


    return (
        <div>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                style={{
                    overflow: "auto",
                }}
                theme="light"
                className='drop-shadow-md h-full'
            >
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
        </div>
    )
}