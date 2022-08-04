import { useRouter } from "next/router";
import MainLayout from "../../../component/admin/layout";
import ButtonBack from "../../../component/reusable/buttonBack"
import { Layout, Row, Col, Card } from 'antd';

const { Content, } = Layout;

export default function DetailUser() {
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
    const router = useRouter();
    const { name } = router.query;
    const dataSelected = data.find((data) => data.name == name);

    return (
        <div>
            <MainLayout>
                <Content>
                    <Row className='mt-6 max-w-sm ml-24'>
                        <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                            <h3 className="text-lg">Detail User</h3>
                        </Col>
                    </Row>
                    <Row justify="center" className="h-screen">
                        <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                            <Card style={{ width: 500, justifyContent: 'space-between', borderRadius: "5%" }}>
                                <div className="space-y-5">
                                    <div>
                                        <h3 className="text-base">Nama</h3>
                                        <Card style={{ width: 400, height: 30 }}><p className="-mt-5 -ml-3 text-gray-400">{dataSelected?.name}</p></Card>
                                    </div>
                                    <div>
                                        <h3 className="text-base">Tanggal Lahir</h3>
                                        <Card style={{ width: 400, height: 30 }}><p className="-mt-5 -ml-3 text-gray-400">{dataSelected?.ttl}</p></Card>
                                    </div>
                                    <div>
                                        <h3 className="text-base">Email</h3>
                                        <Card style={{ width: 400, height: 30 }}><p className="-mt-5 -ml-3 text-gray-400">{dataSelected?.email}</p></Card>
                                    </div>
                                    <div>
                                        <h3 className="text-base">Password</h3>
                                        <Card style={{ width: 400, height: 30 }}><p className="-mt-5 -ml-3 text-gray-400">{dataSelected?.name}</p></Card>
                                    </div>
                                </div>
                                <div className="mt-9">
                                    <h3 className="text-base">Role</h3>
                                    <Card style={{ width: 110, height: 30, borderColor: 'green', backgroundColor: 'rgba(184, 255, 182, 0.8)', textAlign: 'center' }}><p className="-mt-5">{dataSelected?.tags}</p></Card>
                                </div>
                                <div className="text-end mr-12 mt-10">
                                    <ButtonBack />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </MainLayout>
        </div>
    )
}