import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts'

export default function CustomizedRadialBarChart (props: { data: Array<object> }) {
    const { data } = props

    return (
        <RadialBarChart 
        width={300} 
        height={250} 
        innerRadius="10%" 
        outerRadius="80%" 
        data={data}
        startAngle={360}
        endAngle={0}
        >
            <RadialBar  label={{ fill: '#666', position: 'insideStart' }} background dataKey='uv' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
        </RadialBarChart>
    )
}