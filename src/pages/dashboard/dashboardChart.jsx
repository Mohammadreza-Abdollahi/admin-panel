import LineChart from "../../components/Chart";

const DashboardChart = ({data , font , xFontSize , yFontSize , showTitle , titleText , borderWidth , dashWidth , dashWidthHover }) => {
    return ( 
        <> 
            <LineChart chartData={data} font={font} xFontSize={xFontSize} yFontSize={yFontSize} showTitle={showTitle} titleText={titleText} borderWidth={borderWidth} dashWidth={dashWidth} dashWidthHover={dashWidthHover}/>
        </>
     );
}
 
export default DashboardChart;