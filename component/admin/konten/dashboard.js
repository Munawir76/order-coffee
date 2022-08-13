import { Layout, Col, Row, Card } from "antd";
import { SwapOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
const { Content } = Layout;


export default function ContentDashBoard() {

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
                className="bg-white h-96"
                style={{
                    padding: 24,
                    margin: 0,
                    height: 600
                }}
            >
                <Row justify="center">
                    <div className="flex justify-between space-x-7">
                        <div className="block p-2 rounded-lg shadow-lg bg-[#1FC8B9] w-72 h-24">
                            <Row className="justify-between m-3">
                                <Col style={{ fontSize: '15pt' }}>
                                    <h5 className="text-gray-900 text-base leading-tight font-semibold ">
                                        Total Product
                                    </h5>
                                    <Col >{totalProduct}</Col>
                                </Col>
                                <Col style={{ fontSize: '25pt' }} className="text-white"><SwapOutlined /></Col>
                            </Row>
                        </div>
                        <div className="block p-2 rounded-lg shadow-lg bg-[#4C6FFF] w-72 h-24">
                            <Row className="justify-between m-3">
                                <Col style={{ fontSize: '15pt' }}>
                                    <h5 className="text-gray-900 text-base leading-tight font-semibold ">
                                        Total User
                                    </h5>
                                    <Col >{totalUser}</Col>
                                </Col>
                                <Col style={{ fontSize: '25pt' }} className="text-white"><UserOutlined /></Col>
                            </Row>
                        </div>
                        <div className="block p-2 rounded-lg shadow-lg bg-[#FDD74F] w-72 h-24">
                            <Row className="justify-between m-3">
                                <Col style={{ fontSize: '15pt' }}>
                                    <h5 className="text-gray-900 text-base leading-tight font-semibold ">
                                        Total Transaksi
                                    </h5>
                                    <Col >{totalPendapatan}</Col>
                                </Col>
                                <Col style={{ fontSize: '25pt' }} className="text-white"><ShoppingOutlined /></Col>
                            </Row>
                        </div>
                    </div>
                </Row>
            </Content >
        </div>
    )
}