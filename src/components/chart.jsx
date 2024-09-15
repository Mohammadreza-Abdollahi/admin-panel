import { Line } from "react-chartjs-2";
import { Chart as ChartJs, CategoryScale , LinearScale , PointElement , LineElement , Title , Tooltip , Legend , defaults } from "chart.js/auto";

const LineChart = ({chartData , font , xFontSize , yFontSize , showTitle ,titleText , borderWidth , dashWidth , dashWidthHover }) => {
    defaults.elements.line.borderWidth = borderWidth;
    defaults.elements.line.tension = .2;
    defaults.elements.line.fill = true;
    defaults.elements.point.borderWidth = dashWidth;
    defaults.elements.point.hoverBorderWidth = dashWidthHover;
    return ( 
        <Line data={chartData} options={{
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: xFontSize,
                            family: font
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: yFontSize,
                            family: font
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: showTitle,
                    text: titleText,
                    font: {
                        size: 20,
                        family: font
                    }
                },
                tooltip: {
                    titleAlign: 'right',
                    titleFont: {'family' : font , 'lineHeight' : '1.2' , 'size' : '16'},
                    titleSpacing: 200,
                    bodyFont: {'family' : font ,'size' : '15' , 'lineHeight' : '1.2'},
                    bodySpacing: 200,
                    bodyAlign: 'right',
                    bodyColor: 'white',
                    boxPadding: [1000],
                    padding: 12,
                    boxWidth: 0,
                    boxHeight: 0,
                    borderWidth: 2,
                    borderColor: '#246d7a',
                },
                legend: {
                    align: 'end',
                    labels: {
                        font: {
                            size: 18,
                            family: font,
                        }
                    },
                }
            }
        }}/>
    );
}
 
export default LineChart;