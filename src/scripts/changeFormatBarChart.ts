export default function changeFormatBarChart (data: { day: string, kilogram: number, calories: number }[]) {

    data && data.map((element) => {
        element.day = element.day.slice(-2)
    })

    return data
}