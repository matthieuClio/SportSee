// Style
import './customizedToltipBarChart.scss'

export default function CustomizedToltipBarChart (props:{ active?:boolean, payload?:[], label?:string }) {
    const { payload, label } = props

    // payload[0] && console.log(payload[0].payload.kilogram)
    // payload[1] && console.log(payload[1].payload.calories)

    return (
        <div className="toltip">
            {/* {label} */}
            <div className="toltip__kilogram">
                {payload && payload[0] && payload[0].payload.kilogram}kg
            </div>

            <div>
                {payload && payload[1] && payload[1].payload.calories}Kcal
            </div>
        </div>
    )
}