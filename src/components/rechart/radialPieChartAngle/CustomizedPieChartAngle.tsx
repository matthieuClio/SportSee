// Recharts
import { PieChart, Pie, Cell, Legend } from 'recharts'

// Style
import './customizedPieChartAngle.scss'

export default function CustomizedPieChartAngle (props) {
    const { data, legendContent } = props

    // Define Cell color
    const colors = ["#FF0000", "#FBFBFB"]

    // Data formated
    const formatedScore = data * 100

    // Define the empty Cell value
    const remainsToProgress = 100 - formatedScore

    // Specific data format for PieChart
    const specificData = [
        { name: 'Group A', value: formatedScore },
        { name: 'Group B', value: remainsToProgress }
    ]

    return (
        <>
            {/* Container */}
            <div className="pie-chart-container">

                {/* Chart */}
                <PieChart width={280} height={250} className="pie-chart-container__pie-chart-angle">
                    <Pie
                        data={specificData}
                        innerRadius={80}
                        outerRadius={90}
                        fill="#8884d8"
                        paddingAngle={1}
                        cornerRadius={4}
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                    >
                        <Cell fill={colors[0]} stroke={colors[0]} />
                        <Cell fill={colors[1]} stroke={colors[1]} />
                    </Pie>
                    <Legend verticalAlign="top" content={legendContent}/>
                </PieChart>

                {/* Information text */}
                <div className="pie-chart-container__info">
                    <div className="pie-chart-container__info__background">
                        <span className="pie-chart-container__info__background__value">
                            {formatedScore}%
                        </span>

                        <span className="pie-chart-container__info__background__text">
                            de votre objectif
                        </span>
                    </div>
                </div>
            </div>
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
