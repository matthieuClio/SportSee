// Style
import './customizedToltipBarChart.scss'

export default function CustomizedToltipBarChart (props: { 
    payload?: {
        payload: { kilogram: number, calories: number }
    }[],
}) {

    const { payload } = props

    return (
        <div className="toltip">
            <div className="toltip__kilogram">
                {/* payload and payload[0] must be defined for display them */}
                {payload && payload[0] && payload[0].payload.kilogram}kg
            </div>

            <div>
                {/* payload and payload[0] must be defined for display them */}
                {payload && payload[0] && payload[0].payload.calories}Kcal
            </div>
        </div>
    )
}