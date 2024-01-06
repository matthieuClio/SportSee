import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"

export default function CustomizedLineChart (props: { data: Array<object> }) {
    const { data } = props

    return (
        <LineChart 
        width={220}
        height={250}
        data={data}
        margin={{ 
            top: 5,
            right: 30,
            left: 20,
            bottom: 5 
        }}
        >
            <Legend verticalAlign="top" align="left"/>
            <CartesianGrid strokeDasharray="0 3" fillOpacity={0.6} />
            <XAxis dataKey="name" tickLine={false} axisLine={false}  />
            <YAxis tickLine={false} hide={true} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
        </LineChart>
    )
}