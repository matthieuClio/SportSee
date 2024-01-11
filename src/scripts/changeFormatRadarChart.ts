export default function changeFormatRadarChart (data: {
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
}) {

    const dataSpecificFormat: Array<object> = []

    // Defined specific object format
    for (let i = 0; data.data.length > i; i++) {

        // Create new object
        const newObject = 
        {
            subject: data.data[i].kind,
            A: data.kind[i+1 as keyof typeof data.kind],
            fullMark: data.data[i].value
        }
        dataSpecificFormat.push(newObject)
    }

    return dataSpecificFormat
}