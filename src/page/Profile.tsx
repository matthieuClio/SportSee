// React
import { useEffect, useState } from 'react'

// React router
import { Params, useParams } from 'react-router-dom'

// Charts component
import CustomizedBarChart from '../components/rechart/barChart/CustomizedBarChart'
import CustomizedLineChart from '../components/rechart/lineChart/CustomizedLineChart'
import CustomizedRadarChart from '../components/rechart/radarChart/CustomizedRadarChart'
import CustomizedRadialBarChart from '../components/rechart/radialBarChart/CustomizedRadialBarChart'

// Customize chart component
// - For customBarChart -
import RenderLegend from '../components/rechart/barChart/custom/RenderLegend'
import CustomToltip from '../components/rechart/barChart/custom/CustomizedToltip'

// Component
import InfosUser from '../components/InfoUser'

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

export default function Profile () {
    // Hook state
    const [dataUser, setDataUser]: any = useState(false)

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
    // For InfosUser component
    const classBackground = "profile-icon-one"
    const path = '/images/icon/icon-fire.svg'

    // After the first render
    useEffect(() => {

        // Define API/mock data
        async function fetchUserData () {
            
            // Make API/mock call
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

    return dataUser && (
        <main className="profile">
            <h1>Bonjour <span className="profile__first-name">{dataUser.apiDataUser[0].data.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="profile__container">
                <div className="profile__container__chart">
                    <CustomizedBarChart data={dataUser.apiDataActivity[0].data.sessions} legendContent={RenderLegend} tooltipContent={CustomToltip} />
                    <CustomizedLineChart data={dataUser.apiDataAverage[0].data.sessions} />
                    <CustomizedRadarChart data={dataUser.apiDataPerformance[0].data} />
                    <CustomizedRadialBarChart data={data} />
                </div>

                {/* Performance */}
                <ul>
                    <InfosUser backgroundClass={classBackground} urlIcon={path} text="Calorie" data={dataUser.apiDataUser[0].data.keyData} />
                </ul>
            </div>
        </main>
    )
}