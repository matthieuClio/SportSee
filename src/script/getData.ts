import mockData from './mockData'

export default async function getData (idUser:string | undefined) {

    // Use mock data
    if (idUser === '1') {  
             
        return mockData

    } else {
        // Use API data

        // Define an url
        const url = 'http://localhost:3000/user/'
        
        // Make API calls
        const responseUser = await fetch(url + idUser)
        const apiDataUser = await responseUser.json()
        
        const responseActivity = await fetch(`${url + idUser}/activity`)
        const apiDataActivity = await responseActivity.json()

        const responseAverage = await fetch(`${url + idUser}/average-sessions`)
        const apiDataAverage = await responseAverage.json()

        const responsePerformance = await fetch(`${url + idUser}/performance`)
        const apiDataPerformance = await responsePerformance.json()

        // An array will contain all API call
        const apiData = {
            apiDataUser: [apiDataUser], 
            apiDataActivity: [apiDataActivity], 
            apiDataAverage: [apiDataAverage], 
            apiDataPerformance: [apiDataPerformance]
        }

        return apiData
    }
}