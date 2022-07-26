import { Layout, Col, Row, Card } from "antd";
import {
    SwapOutlined,
    UserOutlined,
    ShoppingOutlined
} from '@ant-design/icons';
const { Content } = Layout;


export default function ContentDashBoard() {
    // data bohongan
    const data = [
        {
            key: 2,
            Nama: "Ariel Winardi",
            NomorPemesanan: 19072022,
            tanggalBeli: "09-07-2022",
            jumlah: 120000,

        },
        {
            key: 1,
            Nama: "Dwi Gunawan",
            NomorPemesanan: 11072022,
            tanggalBeli: "11-07-2022",
            jumlah: 180000,

        },
        {
            key: 3,
            Nama: "Galuh Sudariono",
            NomorPemesanan: 15072022,
            tanggalBeli: "15-07-2022",
            jumlah: 200000,

        },
        {
            key: 4,
            Nama: "Budi wicaksono",
            email: "budi_wicaksono@gaguna.com",
            jumlah: 0,
            status: ["Non-Aktif"],

        },
        {
            key: 5,
            Nama: "Munawir",
            email: "Munawir@hot.com",
            jumlah: 0,
            status: ["Aktif"],

        }
    ];
    const totalProduct = 2;
    const totalPendapatan = data.reduce((i, obj) => {
        return i + obj.jumlah;
    }, 0);
    const totalUser = data.length;


    return (
        <div>
            <Content
                className="bg-white"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 300,

                }}
            >
                <Row justify="space-evenly" align="center">
                    <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 20 }}
                        className="shadow-lg  hover:translate-x-2 hover: transition-all delay-300 duration-300 ease-in-out hover:scale-110">
                        <Card
                            title="Total Product"
                            bordered={false}
                        >
                            <Row justify="space-evenly" align="middle" style={{ fontSize: '25pt' }} className="text-slate-500">
                                <Col >{totalProduct}</Col>
                                <Col ><ShoppingOutlined /></Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 20 }}
                        className="shadow-lg  hover:translate-x-2 hover: transition-all delay-300 duration-300 ease-in-out hover:scale-110">
                        <Card
                            title="Total User"
                            bordered={false}

                        >
                            <Row justify="space-evenly" align="middle" style={{ fontSize: '25pt' }} className="text-slate-500">
                                <Col >{totalUser}</Col>
                                <Col ><UserOutlined /></Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={{ span: 6 }} md={{ span: 6 }} sm={{ span: 20 }}
                        className="shadow-lg  hover:translate-x-2 hover: transition-all delay-300 duration-300 ease-in-out hover:scale-110">
                        <Card
                            title="Total Pendapatan"
                            bordered={false}
                        >
                            <Row justify="space-evenly" align="middle" style={{ fontSize: '25pt' }} className="text-slate-500">
                                <Col >{totalPendapatan}</Col>
                                <Col ><SwapOutlined /></Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Content >
        </div>
    )
}