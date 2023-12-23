// Style
import './profile.scss'

// Charts component
import CustomBarChart from '../components/rechart/barChart/CustomizedBarChart'
import CustomLineChart from '../components/rechart/lineChart/CustomizedLineChart'
import CustomRadarChart from '../components/rechart/radarChart/CustomizedRadarChart'
import CustomizedSimpleRadialBarChart from '../components/rechart/simpleRadialBarChart/CustomizedRadialBarChart'

// Customize chart component
import RenderLegend from '../components/rechart/barChart/custom/RenderLegend'
import CustomToltip from '../components/rechart/barChart/custom/CustomizedToltip'

// Mocked data
const data: { name : string, uv: number, pv: number, amt: number }[] = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
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
    return (
        <main className="profile">
            <h1>Bonjour <span className="profile__first-name">'Prénom'</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="profile__container">
                <div className="profile__container__chart">
                    <CustomBarChart data={data} legendContent={RenderLegend} tooltipContent={CustomToltip} />
                    <CustomLineChart data={data} />
                    <CustomRadarChart data={radarData} />
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