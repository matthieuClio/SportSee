// React
import { useEffect, useState } from 'react'

// React router
import { Params, useParams } from 'react-router-dom'

// Charts component
import CustomizedBarChart from '../components/rechart/barChart/CustomizedBarChart'
import CustomizedLineChart from '../components/rechart/lineChart/CustomizedLineChart'
import CustomizedRadarChart from '../components/rechart/radarChart/CustomizedRadarChart'
import CustomizedPieChartAngle from '../components/rechart/radialPieChartAngle/CustomizedPieChartAngle'

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
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

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

    // From react router
    const { userId }: Params<string> = useParams()

    // After the first render
    useEffect(() => {

        // Define API/mock data
        async function fetchUserData () {
            
            // Make API/mock call
            const apiData = await getData(userId) // getData from '../script/getData'

            // - apiData - will contain an object with these keys :
            // apiDataUser
            // apiDataActivity
            // apiDataAverage
            // apiDataPerformance
            setDataUser(apiData)
        }

        fetchUserData()
    }, [userId])
    
    // For InfosUser component
    const unitOfMeasurement: string[] = ['kCal', 'g', 'g', 'g']
    const textValue: string[] = ['Calorie', 'Proteines', 'Glucides', 'Lipides']
    const classBackground: string[] = [
        'profile-icon-one',
        'profile-icon-two',
        'profile-icon-three',
        'profile-icon-one'
    ]
    const path: string[] = [
        '/images/icon/fire-icon.svg',
        '/images/icon/chiken-icon.svg',
        '/images/icon/apple-icon.svg',
        '/images/icon/cheeseburger-icon.svg'
    ]
    const allKeyData:string[] = dataUser && [
        dataUser.apiDataUser[0].data.keyData.calorieCount, 
        dataUser.apiDataUser[0].data.keyData.proteinCount, 
        dataUser.apiDataUser[0].data.keyData.carbohydrateCount, 
        dataUser.apiDataUser[0].data.keyData.lipidCount
    ]

    // Define length of keyData (from dataUser)
    const sizeKeyData: number = dataUser && Object.keys(dataUser.apiDataUser[0].data.keyData).length

    // Define all InfoUser component
    function createInfoUser () {

        const allInfoUserComp: React.JSX.Element[] = []

        // Remplacer par 4 composant <-
        for (let i = 0; sizeKeyData-1 >= i; i++) {
            allInfoUserComp.push(
                <InfosUser 
                    key={`unique-1-${i}`}
                    backgroundClass={classBackground[i]}
                    urlIcon={path[i]}
                    text={textValue[i]}
                    unit={unitOfMeasurement[i]}
                    data={allKeyData[i]}
                />
            )
        }
        return allInfoUserComp
    }

    return dataUser && (
        <main className="profile">
            <h1>Bonjour <span className="profile__first-name">{dataUser.apiDataUser[0].data.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="profile__container">
                <div className="profile__container__chart">
                    <CustomizedBarChart data={dataUser.apiDataActivity[0].data.sessions} legendContent={RenderLegend} tooltipContent={CustomToltip} />
                    <CustomizedLineChart data={dataUser.apiDataAverage[0].data.sessions} />
                    <CustomizedRadarChart data={dataUser.apiDataPerformance[0].data} />
                    <CustomizedPieChartAngle data={data}/>
                </div>

                {/* Performance */}
                <ul className="profile__container__performance">
                    {/* Display all InfoUser component */}
                    {createInfoUser()}
                </ul>
            </div>
        </main>
    )
}