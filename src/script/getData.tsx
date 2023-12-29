export default async function getData (idUser:string | undefined) {

    const responseUser = await fetch(`http://localhost:3000/user/${idUser}`)
    const apiDataUser = await responseUser.json()
    
    const responseActivity = await fetch(`http://localhost:3000/user/${idUser}/activity`)
    const apiDataActivity = await responseActivity.json()

    const responseAverage = await fetch(`http://localhost:3000/user/${idUser}/average-sessions`)
    const apiDataAverage = await responseAverage.json()

    const responsePerformance = await fetch(`http://localhost:3000/user/${idUser}/average-sessions`)
    const apiDataPerformance = await responsePerformance.json()

    const apiData = [apiDataUser, apiDataActivity, apiDataAverage, apiDataPerformance]

    return apiData
}