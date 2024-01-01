// React
import { useEffect, useState } from 'react'

// React router
import { Params, useParams } from 'react-router-dom'

// Charts component
import CustomizedBarChart from '../components/rechart/barChart/CustomizedBarChart'
import CustomizedLineChart from '../components/rechart/lineChart/CustomizedLineChart'
import CustomizedRadarChart from '../components/rechart/radarChart/CustomizedRadarChart'
import CustomizedSimpleRadialBarChart from '../components/rechart/simpleRadialBarChart/CustomizedRadialBarChart'

// Customize chart component
// - For customBarChart -
import RenderLegend from '../components/rechart/barChart/custom/RenderLegend'
import CustomToltip from '../components/rechart/barChart/custom/CustomizedToltip'

// Style
import './profile.scss'

// Script
import getData from '../script/getData'

// Mocked data
const data: { name : string, uv: number, pv: number, amt: number }[] = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
]

const radarData: { subject:string, "A": number, "B": number, "fullMark": number }[] = [
    {
      "subject": "Math",
      "A": 120,
      "B": 110,
      "fullMark": 150
    },
    {
      "subject": "Chinese",
      "A": 98,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "English",
      "A": 86,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "Geography",
      "A": 99,
      "B": 100,
      "fullMark": 150
    },
    {
      "subject": "Physics",
      "A": 85,
      "B": 90,
      "fullMark": 150
    },
    {
      "subject": "History",
      "A": 65,
      "B": 85,
      "fullMark": 150
    }
]

export default function Profile () {
    // Hook state
    const [dataUser, setDataUser]: any = useState(0)
    
    // useState(
    //     [
    //         {
    //             data: {
    //                 id: 0,
    //                 userInfos: {
    //                     firstName: '',
    //                     lastName: '',
    //                     age: 0,
    //                 },
    //                 todayScore: 0,
    //                 keyData: {
    //                     calorieCount: 0,
    //                     proteinCount: 0,
    //                     carbohydrateCount: 0,
    //                     lipidCount: 0,
    //                 },
    //             }
    //         },
    //     ]
    // )
    const { userId }: Params<string> = useParams()

    // After the first render
    useEffect(() => {

        // Define user data
        async function fetchUserData () {
            
            // Make call API
            const apiData = await getData(userId) // getData from '../script/getData'

            // Will contain an array
            // [0] -> apiDataUser
            // [1] -> apiDataActivity
            // [2] -> apiDataAverage
            // [3] -> apiDataPerformance
            setDataUser(apiData)
        }

        fetchUserData()
    }, [userId])

    return (
        <main className="profile">
            <h1>Bonjour <span className="profile__first-name">{dataUser[0] && dataUser[0].data.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="profile__container">
                <div className="profile__container__chart">
                    <CustomizedBarChart data={dataUser[1] && dataUser[1].data.sessions} legendContent={RenderLegend} tooltipContent={CustomToltip} />
                    <CustomizedLineChart data={data} />
                    <CustomizedRadarChart data={radarData} />
                    <CustomizedSimpleRadialBarChart data={data} />
                </div>

                <ul>
                    <li>
                        Calories
                    </li>

                    <li>
                        Proteine
                    </li>

                    <li>
                        Glucides
                    </li>

                    <li>
                        Lipides
                    </li>
                </ul>
            </div>
        </main>
    )
}