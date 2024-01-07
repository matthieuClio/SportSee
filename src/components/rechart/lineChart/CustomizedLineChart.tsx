import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"

export default function CustomizedLineChart (props: { data: Array<object> }) {
    let { data }: Record<string, any> = props
    // let { data } = props

    // Can be a script file <---
    function changeFormatData () {
        const days: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

        data.map((element: { dayToDisplay: string }, index: number) => {
            element.dayToDisplay = days[index]
        })

        return data
    }
    data = changeFormatData()

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
        className="profile__container__chart__line-chart"
        >
            <Legend verticalAlign="top" align="left"/>
            <CartesianGrid strokeDasharray="0 3" fillOpacity={0.6} />
            <XAxis dataKey="dayToDisplay" tickLine={false} axisLine={false} stroke="#FF7676"/>
            <YAxis hide={true} tickLine={false} axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="sessionLength" dot={false} stroke="#FF7676" strokeWidth={2} />
        </LineChart>
    )
}