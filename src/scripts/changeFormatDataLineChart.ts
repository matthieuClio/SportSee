export default function changeFormatDataLineChart (data: Record<string, any>) {

    // Define the display value
    const days: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    // Attribute value to the key object dayToDisplay
    data.map((element: { dayToDisplay: string }, index: number) => {
        element.dayToDisplay = days[index]
    })

    return data
}