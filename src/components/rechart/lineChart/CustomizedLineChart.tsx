import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"

export default function CustomLineChart (props: { 
                                                    data: { name: string, uv: number, pv: number, amt: number }[], 
                                                }
                                        ) {
    const { data } = props

    return (
        <LineChart 
        width={300}
        height={250}
        data={data}
        margin={{ 
            top: 5,
            right: 30,
            left: 20,
            bottom: 5 
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    )
}