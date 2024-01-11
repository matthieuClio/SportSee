export default function changeFormatDataLineChart (data: Record<string, any>) {
    const days: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    data.map((element: { dayToDisplay: string }, index: number) => {
        element.dayToDisplay = days[index]
    })

    return data
}