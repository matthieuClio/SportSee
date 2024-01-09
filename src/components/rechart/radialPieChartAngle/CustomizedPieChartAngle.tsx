// Recharts
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// Style
import './customizedPieChartAngle.scss'

export default function CustomizedPieChartAngle (props) {
    const { data } = props
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <>
            <PieChart width={280} height={250} className="pie-chart-angle">
                <Pie
                    data={data}
                    // cx={0}
                    // cy={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </>
    )
}

// import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts'

// export default function CustomizedRadialBarChart (props: { data: Array<object> }) {
//     const { data } = props

//     return (
//         <RadialBarChart
//         width={220} 
//         height={250} 
//         innerRadius="0%"
//         outerRadius="130%"
//         data={data}
//         startAngle={250}
//         endAngle={0}
//         className="profile__container__chart__radial-bar-chart"
//         >
//             <RadialBar label={{ fill: "#FFFFFF", position: "insideStart" }} background dataKey="uv" />
//             {/* <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" /> */}
//             {/* <Tooltip /> */}
//         </RadialBarChart>
//     )
// }
