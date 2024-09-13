import DashboardChart from "./dashboardChart";
import DashboardSubCart from "./dashboardSubCarts";
import DashboardTable from "./dashboardTable";
import DashboardTopCart from "./dashboardTopCarts";

const Dashboard = () => {
    return (
        <>
            <div className="flex justify-around gap-3 mb-3">
                <DashboardTopCart count={'8'} title={'سبد خرید امروز'} subTitle={'سبد های خرید مانده امروز'} icon={'fa-solid fa-shopping-basket'} firstColor='from-gradient-1' secondColor='to-gradient-2'/>
                <DashboardTopCart count={'12'} title={'سفارش های مانده امروز'} subTitle={'سفارشات معلق و فاقد پرداختی'} icon={'fa-solid fa-cart-flatbed'} firstColor={'from-gradient-3'} secondColor={'to-gradient-4'}/>
                <DashboardTopCart count={'8'} title={'سفارشات امروز'} subTitle={'سفارشات کامل و دارای پرداختی'} icon={'fa-solid fa-bag-shopping'} firstColor={'from-gradient-5'} secondColor={'to-gradient-6'}/>
                <DashboardTopCart count={'8'} title={'درآمد امروز'} subTitle={'جمع مبالغ پرداختی'} icon={'fa-solid fa-solid fa-money-bill-1-wave'} firstColor={'from-gradient-7'} secondColor={'to-gradient-8'}/>
            </div>
            <div className="flex justify-around gap-3 mb-8">
                <DashboardSubCart weekly={'5'} monthly={'13'} firstColor='from-gradient-1' secondColor='to-gradient-2'/>
                <DashboardSubCart weekly={'3'} monthly={'21'} firstColor='from-gradient-3' secondColor='to-gradient-4'/>
                <DashboardSubCart weekly={'7'} monthly={'15'} firstColor='from-gradient-5' secondColor='to-gradient-6'/>
                <DashboardSubCart weekly={'9'} monthly={'8'} firstColor='from-gradient-7' secondColor='to-gradient-8'/>
            </div>
            <section className="flex justify-around gap-3">
                <div className="w-full">
                    <DashboardTable/>
                </div>
                <div className="w-full">
                    <DashboardChart/>
                </div>
            </section>
        </>
     );
}
 
export default Dashboard;