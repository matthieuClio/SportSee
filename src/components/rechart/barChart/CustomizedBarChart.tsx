// Recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// Style
import './customizedBarChart.scss'

// Script
import changeFormatBarChart from '../../../scripts/changeFormatBarChart'

export default function CustomizedBarChart (props: { 
                                                data: { day: number | string }[], 
                                                legendContent: (props: object) => React.JSX.Element, 
                                                tooltipContent: (props: object) => React.JSX.Element 
                                            }) {

    let { data } = props                             
    const { legendContent, tooltipContent } = props

    // Change data format
    data = changeFormatBarChart(data)

    return (
        <BarChart
        width={860}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        barSize={10}
        barGap={15}
        className="bar-chart"
        >
            <Legend verticalAlign="top" align="right" content={legendContent} />
            <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6} vertical={false} />
            <XAxis dataKey="day" tickLine={false} />
            <YAxis orientation="right" hide={false} includeHidden type="number" tickLine={false} axisLine={false} />
            <Tooltip
                content={tooltipContent}
            />
            <Bar 
                dataKey="kilogram" 
                fill="#282D30" 
                // label={{ position: "top" }} 
                radius={[10, 10, 0, 0]} 
            />
            <Bar 
                dataKey="calories" 
                fill="#E60000" 
                // label={{ position: "top" }} 
                radius={[10, 10, 0, 0]} 
            />
        </BarChart>
    )
}
