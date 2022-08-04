import { useRouter } from "next/router";
import MainLayout from "../../../component/admin/layout";
import ButtonBack from "../../../component/reusable/buttonBack"
import Foto1 from '../../../public/images/redvalvet.jpg'
import Image from 'next/image'
import Foto2 from '../../../public/images/vietnamdrip.jpg'
import Foto3 from '../../../public/images/taro.jpg'
import { Layout, Row, Col, Card } from 'antd';

const { Content, } = Layout;

export default function DetailProduct() {
    const data = [
        {
            key: '1',
            product: 'Redvalvet',
            varian: 'Non Coffee',
            harga: 'Rp. 25.000',
            foto: <Image src={Foto1} width={250} height={220} style={{ borderRadius: "5%" }} />,
            tags: ['Tersedia'],
            desk: 'Redvalvet terbuat dari djsao slfjn sjh sjhao sjbhfioau skfha aksf b shf aoshf '
        },
        {
            key: '2',
            product: 'Vietnam Drip',
            varian: 'Coffee',
            harga: 'Rp. 20.000',
            foto: <Image src={Foto2} width={250} height={220} />,
            tags: ['Tidak Tersedia'],
        },
        {
            key: '3',
            product: 'Taro iced',
            varian: 'Non Coffee',
            harga: 'Rp. 25.000',
            foto: <Image src={Foto3} width={250} height={220} />,
            tags: ['Tersedia'],
        },
    ];
    const router = useRouter();
    const { product } = router.query;
    const dataSelected = data.find((data) => data.product == product);

    return (
        <div>
            <MainLayout>
                <Content>
                    <Row className='mt-6 max-w-sm ml-24'>
                        <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 22 }} xs={{ span: 24 }}>
                            <h3 className="text-lg">Detail Product</h3>
                        </Col>
                    </Row>
                    <Row justify="center" className="h-screen">
                        <Col lg={{ span: 20 }} md={{ span: 22 }} sm={{ span: 22 }} xs={{ span: 24 }} >
                            <Card style={{ width: 800, height: 470, justifyContent: 'space-between', borderRadius: "2%" }}>
                                <Row>
                                    <Col span={9}>
                                        {dataSelected?.foto}
                                    </Col>
                                    <Col span={9} className="space-y-3">
                                        <div >
                                            <h3 className="text-xs">Nama Product</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.product}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-xs">Jenis Variant</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.varian}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-xs">Harga</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.harga}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-xs">Status</h3>
                                            <Card style={{ width: 400, height: 25 }}><p className="-mt-5 -ml-3 text-gray-400 text-xs">{dataSelected?.tags}</p></Card>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col>
                                        <h2>Deskripsi</h2>
                                        <Card style={{ width: 250 }}>
                                            <p>{dataSelected?.desk}</p>
                                        </Card>
                                    </Col>
                                    <Col span={14}>
                                        <div className="text-end mt-32">
                                            <ButtonBack />
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </MainLayout>
        </div>
    )
}