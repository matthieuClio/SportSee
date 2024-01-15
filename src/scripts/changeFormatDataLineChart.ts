export default function changeFormatDataLineChart (data: { day: number, sessionLength: number }[]) {

    interface DataSessionsModify {
        day: number,
        sessionLength: number,
        dayToDisplay?: string // New property defined
    }

    // Define the display value
    const days: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    // Add a new property 'dayToDisplay'
    data.map((element: DataSessionsModify, index: number) => {
        element.dayToDisplay = days[index]
    })

    return data
}