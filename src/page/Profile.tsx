// React
import { useEffect, useState } from 'react'

// React router
import { Params, useParams, useNavigate } from 'react-router-dom'

// Charts component
import CustomizedBarChart from '../components/rechart/barChart/CustomizedBarChart'
import CustomizedLineChart from '../components/rechart/lineChart/CustomizedLineChart'
import CustomizedRadarChart from '../components/rechart/radarChart/CustomizedRadarChart'
import CustomizedPieChartAngle from '../components/rechart/radialPieChartAngle/CustomizedPieChartAngle'

// Customized component for Charts
// - For CustomizedBarChart -
import RenderLegendBarChart from '../components/rechart/barChart/customized/RenderLegendBarChart'
import CustomizedToltipBarChart from '../components/rechart/barChart/customized/CustomizedToltipBarChart'
// - For CustomizedLineChart -
import RenderLegendLineChart from '../components/rechart/lineChart/customized/RenderLegendLineChart'
import CustomizedToltipLineChart from '../components/rechart/lineChart/customized/CustomizedToltipLineChart'
// - For CustomizedPieChartAngle -
import RenderLegendPieChart from '../components/rechart/radialPieChartAngle/customized/RenderLegendPieChart'

// Other component
import InfosUser from '../components/InfoUser'

// Style
import './profile.scss'

// Script
import getData from '../scripts/getData'
import mockData from '../scripts/mockData'

export default function Profile () {

    // Hook state initialized with a mock api data
    const [dataUser, setDataUser] = useState(mockData)

    // For make a redirection
    const navigate = useNavigate()

    // Get react router params
    const { userId }: Params<string> = useParams()

    // After the first render
    useEffect(() => {

        // Define API/mock data
        async function fetchUserData () {
            
            // Contain data API/mock call
            // (For see data structure, look the mock -> '../scripts/mockData')
            const apiData = await getData(userId) // getData from '../script/getData'

            // Make a redirection when we have no route who will get us data
            if (userId !== '1' && userId !== '12' && userId !== '18') {
                navigate('error')
            }

            // Stock API data if not undefined (in useSate variable)
            apiData && setDataUser(apiData)
        }

        fetchUserData()
    }, [userId, navigate])

    return dataUser && (
        <main className="profile">
            <h1>Bonjour <span className="profile__first-name">{dataUser.apiDataUser[0].data.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="profile__container">
                <div className="profile__container__chart">
                    <CustomizedBarChart data={dataUser.apiDataActivity[0].data.sessions} legendContent={RenderLegendBarChart} tooltipContent={CustomizedToltipBarChart} />
                    <CustomizedLineChart data={dataUser.apiDataAverage[0].data.sessions} legendContent={RenderLegendLineChart} tooltipContent={CustomizedToltipLineChart}/>
                    <CustomizedRadarChart data={dataUser.apiDataPerformance[0].data} />
                    <CustomizedPieChartAngle 
                        // 'dataUser' can have a different property : 'todayScore' or 'score' (depend of the user data given)
                        data={dataUser.apiDataUser[0].data.todayScore ? dataUser.apiDataUser[0].data.todayScore : dataUser.apiDataUser[0].data.score}
                        legendContent={RenderLegendPieChart}
                    />
                </div>

                {/* Performance */}
                <ul className="profile__container__performance">

                    {/* InfoUser components */}
                    <InfosUser 
                        backgroundClass={'profile-icon-one'}
                        urlIcon={'/images/icon/fire-icon.svg'}
                        text={'Calorie'}
                        unit={'kCal'}
                        data={dataUser.apiDataUser[0].data.keyData.calorieCount}
                    />

                    <InfosUser 
                        backgroundClass={'profile-icon-two'}
                        urlIcon={'/images/icon/chiken-icon.svg'}
                        text={'Proteines'}
                        unit={'g'}
                        data={dataUser.apiDataUser[0].data.keyData.proteinCount}
                    />

                    <InfosUser 
                        backgroundClass={'profile-icon-three'}
                        urlIcon={'/images/icon/apple-icon.svg'}
                        text={'Glucides'}
                        unit={'g'}
                        data={dataUser.apiDataUser[0].data.keyData.carbohydrateCount}
                    />

                    <InfosUser 
                        backgroundClass={'profile-icon-one'}
                        urlIcon={'/images/icon/cheeseburger-icon.svg'}
                        text={'Lipides'}
                        unit={'g'}
                        data={dataUser.apiDataUser[0].data.keyData.lipidCount}
                    />
                </ul>
            </div>
        </main>
    )
}
