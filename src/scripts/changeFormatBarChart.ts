export default function changeFormatBarChart (data: { day: string }[]) {

    data && data.map((element) => {
        element.day = element.day.slice(-2)
    })

    return data
}