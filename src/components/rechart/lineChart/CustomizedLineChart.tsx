// Recharts
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"

// Style
import './customizedLineChart.scss'

// Script
import changeFormatDataLineChart from '../../../scripts/changeFormatDataLineChart'

export default function CustomizedLineChart (props: { 
                                                        data: Array<object>, 
                                                        legendContent: (props: object) => React.JSX.Element,
                                                        tooltipContent: (props: object) => React.JSX.Element 
                                                    }
                                            ) {
    const { legendContent, tooltipContent } = props
    let { data }: Record<string, any> = props

    // Change data format
    data = changeFormatDataLineChart(data)

    return (
        <LineChart 
        width={280}
        height={250}
        data={data}
        margin={{ 
            top: 5,
            right: 30,
            left: 20,
            bottom: 5 
        }}
        className="line-chart"
        >
            <Legend verticalAlign="top" align="left" content={legendContent}/>
            <CartesianGrid strokeDasharray="0 3" fillOpacity={0.6} />
            <XAxis dataKey="dayToDisplay" tickLine={false} axisLine={false} stroke="#FF7676"/>
            <YAxis hide={true} tickLine={false} axisLine={false} />
            <Tooltip content={tooltipContent}/>
            <Line type="monotone" dataKey="sessionLength" dot={false} stroke="#FF7676" strokeWidth={2} />
        </LineChart>
    )
}