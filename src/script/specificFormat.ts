export default function specificFormat (data: {
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
}, radarChartData: Array<object>) {

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

    return radarChartData
}