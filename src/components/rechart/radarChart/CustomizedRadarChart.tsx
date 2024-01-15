// Recharts
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"

// Style
import './customizedRadarChart.scss'

// Script
import changeFormatRadarChart from "../../../scripts/changeFormatRadarChart"

export default function CustomizedRadarChart (props: { data: {
    "userId": number,
    "kind": {
        1: string,
        2: string,
        3: string,
        4: string,
        5: string,
        6: string
    },
    "data": [
        {"kind": number, "value": number},
        {"kind": number, "value": number},
        {"kind": number, "value": number},
        {"kind": number, "value": number},
        {"kind": number, "value": number},
        {"kind": number, "value": number},
    ]
}}) {
    const { data } = props
    // console.log(data)
    
    // type OnlyKeys = keyof typeof data.kind

    // Defined specific object format
    const radarChartData: { subject: number, A: string, fullMark: number }[] = data && changeFormatRadarChart(data)
    
    return data && (
        <RadarChart
        outerRadius={90}
        width={280}
        height={250}
        data={radarChartData}
        className="radar-chart"
        >

            <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 10, 20, 40, 60, 80]}/>
            <PolarAngleAxis dataKey="A" stroke="#FFFFFF" tickLine={false} axisLine={false} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
            <Radar name="Mike" dataKey="fullMark" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
    )
}