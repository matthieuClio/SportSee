import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts"

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
    const radarChartData:Array<object> = []
    // type OnlyKeys = keyof typeof data.kind;


    // Only if data exist
    if (data) {

        // Defined specific object format
        for (let count = 0; data.data.length > count; count++) {

            // Create new object
            const newObject = 
            {
                subject: data.data[count].kind,
                A: data.kind[count+1 as keyof typeof data.kind],
                fullMark: data.data[count].value
            }
            radarChartData.push(newObject)
        }
    }
    
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