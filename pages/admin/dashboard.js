import KontenDashBoard from "../../component/admin/konten/dashboard"
import MainLayout from "../../component/admin/layout/index"


function Dashboard() {

    return (
        <div>
            <MainLayout>
                <KontenDashBoard />
            </MainLayout>
        </div>
    )
}
export default Dashboard