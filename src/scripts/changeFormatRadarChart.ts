export default function changeFormatRadarChart (data: {
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
        {"value": number, "kind": number},
        {"value": number, "kind": number},
        {"value": number, "kind": number},
        {"value": number, "kind": number},
        {"value": number, "kind": number},
        {"value": number, "kind": number}
    ]
}) {

    // Will be the new data format
    const dataSpecificFormat: { subject: number, A: string, fullMark: number }[] = []

    // It's the new order and value than A: string of dataSpecificFormat must be
    const statistics = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']

    // Defined specific object format
    for (let i = 0; data.data.length > i; i++) {

        let statisticsTranslation = ''

        // Will contain the translation (statisticsTranslation)
        switch (data.kind[i+1 as keyof typeof data.kind]) {

            case 'intensity': statisticsTranslation = statistics[0];
            break;

            case 'speed': statisticsTranslation = statistics[1];
            break;

            case 'strength': statisticsTranslation = statistics[2];
            break;

            case 'endurance': statisticsTranslation = statistics[3];
            break;

            case 'energy': statisticsTranslation = statistics[4];
            break;

            case 'cardio': statisticsTranslation = statistics[5];
            break;
        }

        // Create new object
        const newObject = {
            subject: data.data[i].kind,
            A: statisticsTranslation,
            fullMark: data.data[i].value
        }

        // Insert in the array
        dataSpecificFormat.push(newObject)
    }

    // SPLICE METHOD : Array.splice()
    // Start - the index in the array to start making changes at
    // DeleteCount - how many items to delete (if any, it can also be 0)
    // Items - the items to add at the index (can be none, one, or more than one)

    // Counts
    let mainCount = 0
    let secondaryCount = 0
    
    // Defined a new order of dataSpecificFormat - Order will be the Same as statistics
    while (mainCount != dataSpecificFormat.length) {

        // Order by statistics value
        if (dataSpecificFormat[secondaryCount].A === statistics[mainCount]) {

            // Stock Old index value
            const oldValue = dataSpecificFormat[mainCount]

            // Value ducplicate to the index
            dataSpecificFormat.splice(mainCount, 1, dataSpecificFormat[secondaryCount])

            // Delete the old duplicate
            dataSpecificFormat.splice(secondaryCount, 1)

            // Add old index value replaced by the new duplicate
            dataSpecificFormat.splice(secondaryCount, 0, oldValue)

            mainCount++
            secondaryCount = 0
        }
        secondaryCount++

        // Max loop, Security for exit the loop
        if (secondaryCount > 200) {
            mainCount = dataSpecificFormat.length
        }
    }

    return dataSpecificFormat
}