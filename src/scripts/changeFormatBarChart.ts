export default function changeFormatBarChart (data: { day: number | string }[]) {
    
    data && data.map((element, index) => {
        element.day = index + 1
    })

    return data
}