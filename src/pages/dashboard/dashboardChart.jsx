import { useState } from "react";
import { dataPoints, labels } from "../../mock/chartData";
import LineChart from "../../components/chart";

const DashboardChart = () => {
    const [data , setData] = useState({
        
        labels: labels,
        datasets: [{
            label: 'سلام',
            data: dataPoints,       
            backgroundColor: ['#3fc1c9'],
            borderColor: ['#3fc1c9']
                
        }]
    })
    return ( 
        <> 
            <LineChart chartData={data}/>
        </>
     );
}
 
export default DashboardChart;