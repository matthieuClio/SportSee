import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function CustomizedBarChart (props: { 
                                                    data: Array<object>, 
                                                    legendContent: (props: object) => React.JSX.Element, 
                                                    tooltipContent: (props: object) => React.JSX.Element 
                                                }
                                        ) {

    const { data, legendContent, tooltipContent } = props

    return (
        <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        barSize={20}
        barGap={15}
        >
            <Legend verticalAlign="top" align="right" content={legendContent} />
            <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6} vertical={false} />
            <XAxis dataKey="day" tickLine={false} />
            <YAxis orientation="right" hide={false} includeHidden type="number" tickLine={false} axisLine={false} />
            <Tooltip
                content={tooltipContent}
                contentStyle={{ backgroundColor: '#E60000', color: 'white' }} 
                itemStyle={{ color: 'white' }}
            />
            <Bar dataKey="kilogram" fill="#282D30" label={{ position: "top" }} radius={[10, 10, 0, 0]} />
            <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
        </BarChart>
    )
}
