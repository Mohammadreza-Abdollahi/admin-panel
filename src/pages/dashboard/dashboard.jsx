import { useState } from "react";
import DashboardChart from "./DashboardChart";
import DashboardSubCart from "./DashboardSubCarts";
import DashboardTable from "./DashboardTable";
import DashboardTopCart from "./DashboardTopCarts";
import { dataPoints, labels } from "../../mock/chartData";
import PaginationTable from "../../components/PaginationTable";
import { data as tableData , dataInfo } from "../../mock/dashboardData";
import { Tooltip } from "@mui/material";

const actionColumn = {
    title: 'عملیات',
    elements: (id)=>sendElements(id)
}
const sendElements = (id)=>{
    console.log(id);
    return(
        <Tooltip arrow placement="left" title={<><span className="text-base">حذف</span></>}><i className="fa-solid fa-trash text-xl text-red-500 hover:bg-red-100 px-2 rounded-md cursor-pointer"></i></Tooltip>
    )
}

const Dashboard = () => {
    const [chartData , setChartData] = useState({
        
        labels: labels,
        datasets: [
        {
            label: 'فروش',
            data: dataPoints,       
            backgroundColor: ['rgba(0,0,0,.1)'],
            borderColor: ['#3fc1c9'], 
        },
        ],  
    })
    return (
        <>
            <div className="flex justify-around gap-3 mb-3 pt-2">
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
            <section className="flex justify-around items-start gap-3">
                <div className="w-full">
                    <PaginationTable data={tableData} dataInfo={dataInfo} actionCol={actionColumn}/>
                </div>
                <div className="w-full">
                    <DashboardChart data={chartData} font={'font'} xFontSize={16} yFontSize={17} showTitle={true} titleText={'نمودار فروش سالانه'} borderWidth={3} dashWidth={5} dashWidthHover={8}/>
                </div>
            </section>
        </>
     );
}
 
export default Dashboard;