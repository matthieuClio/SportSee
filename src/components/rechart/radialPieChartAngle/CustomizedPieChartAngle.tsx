// Recharts
import { PieChart, Pie, Cell, Legend } from 'recharts'

// Style
import './customizedPieChartAngle.scss'

export default function CustomizedPieChartAngle (props: { data: number, legendContent: () => React.JSX.Element }) {
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
                    <Legend verticalAlign="top" content={legendContent} />
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
