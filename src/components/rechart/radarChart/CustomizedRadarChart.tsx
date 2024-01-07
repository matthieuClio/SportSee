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
    
    // type OnlyKeys = keyof typeof data.kind

    // Defined specific object format
    const radarChartData: Array<object> = data && specificFormat(data)
    
    return data && (
        <RadarChart
        outerRadius={90}
        width={220}
        height={250}
        data={radarChartData}
        className="profile__container__chart__radarChart"
        >

            <PolarGrid gridType='polygon' radialLines={false} polarRadius={[0, 10, 20, 40, 60, 80]}/>
            <PolarAngleAxis dataKey="A" stroke="#FFFFFF" tickLine={false} axisLine={false} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
            <Radar name="Mike" dataKey="fullMark" fill="#FF0000" fillOpacity={0.6} />
            {/* <Legend /> */}
        </RadarChart>
    )
}