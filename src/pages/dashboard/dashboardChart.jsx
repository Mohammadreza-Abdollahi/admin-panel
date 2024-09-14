import LineChart from "../../components/chart";

const DashboardChart = ({data , font , xFontSize , yFontSize , showTitle , titleText}) => {
    return ( 
        <> 
            <LineChart chartData={data} font={font} xFontSize={xFontSize} yFontSize={yFontSize} showTitle={showTitle} titleText={titleText}/>
        </>
     );
}
 
export default DashboardChart;