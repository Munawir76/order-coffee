import MainLayout from "../../../component/admin/layout";
import ButtonBack from "../../../component/reusable/buttonBack"
import { Layout, Row, Col, Card } from 'antd';
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const { Content, } = Layout;

export default function DetailUser() {

    const [dataDetailUser, setDataDetailUser] = useState([])

    async function getDataDetailUser() {
        try {
            const tokenDetailUser = await localStorage.getItem('tokenAdmin')
            const decodeTokenDetail = jwt_decode(tokenDetailUser)
            const getDataDetail = await axios.get(`https://ordercoffee-app.herokuapp.com/users/`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                // console.log(res.data)
                // apiDataUserDetail = res.data
                // console.log(apiDataUserDetail)
                setDataDetailUser(res.data.data)


            })
        } catch (error) {

        }
    }

    useEffect(() => {
        getDataDetailUser()
    }, [])


    const router = useRouter();
    const { fullname } = router.query;
    const dataSelected = dataDetailUser.find((data) => data.fullname == fullname);
    const myRole = {
        id: `${dataSelected?.role.id}`,
        detail: `${dataSelected?.role.detail}`
    }
    console.log(myRole)

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
                            <Card style={{ width: 500, height: 500, justifyContent: 'space-between', borderRadius: "5%" }}>
                                {/* {dataDetailUser.map((data) => {
                                    return ( */}
                                <div>
                                    <div className="space-y-5">
                                        <div className="text-end">
                                            <ButtonBack />
                                        </div>
                                        <div>
                                            <h3 className="text-base">Nama</h3>
                                            <Card style={{ width: 400, height: 30 }}><p className="-mt-5 -ml-3 text-gray-400">{dataSelected?.fullname}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-base">Tanggal Lahir</h3>
                                            <Card style={{ width: 400, height: 30 }}><p className="-mt-5 -ml-3 text-gray-400">{dataSelected?.birthofdate}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-base">Email</h3>
                                            <Card style={{ width: 400, height: 30 }}><p className="-mt-5 -ml-3 text-gray-400">{dataSelected?.email}</p></Card>
                                        </div>
                                        <div>
                                            <h3 className="text-base">Role</h3>
                                            <Card style={{ width: 110, height: 30, borderColor: 'black', backgroundColor: 'rgba(213, 213, 213, 0.8)', textAlign: 'center' }}><p className="-mt-5">{myRole.detail}</p></Card>
                                        </div>
                                    </div>


                                </div>
                                {/* )
                                })} */}

                            </Card>
                        </Col>
                    </Row>
                </Content>
            </MainLayout>
        </div>
    )
}