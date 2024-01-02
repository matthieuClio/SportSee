// Rechart
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts"

// script
import specificFormat from "../../../script/specificFormat"

export default function CustomizedRadarChart (props: { data: {
    "userId": 12,
    "kind": {
        1:number,
        2:number,
        3:number,
        4:number,
        5:number,
        6:number
    },
    "data": [
        {"value": number,"kind":number},
        {"value": number,"kind":number},
        {"value":number,"kind":number},
        {"value":number,"kind":number},
        {"value":number,"kind":number},
        {"value":number,"kind":number}
    ]
}}) {
    const { data } = props
    let radarChartData:Array<object> = []
    // type OnlyKeys = keyof typeof data.kind

    // Defined specific object format
    data && (radarChartData = specificFormat(data, radarChartData))
    
    return data && (
        <RadarChart outerRadius={90} width={300} height={250} data={radarChartData}>
            <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 10, 27, 49, 72, 95]}/>
            <PolarAngleAxis dataKey="A" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Mike" dataKey="fullMark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    )
}