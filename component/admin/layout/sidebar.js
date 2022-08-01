import 'antd/dist/antd.css'
import 'tailwindcss/tailwind.css'
import { Layout, Menu } from 'antd';
import { useState } from 'react';
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


export default function Sidebar() {
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
            label: <Link href=""><a className='w-full text-lg '>Logout</a></Link>, key: "logout", icon: <ImportOutlined />,
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

    return (
        <div>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                style={{
                    overflow: "auto",

                }}

                theme="light"
                className='drop-shadow-md h-full'>

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