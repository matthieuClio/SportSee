// Style
import './CustomizedToltipLineChart.scss'

export default function CustomizedToltipBarChart (props: { 
                                                            payload?: { 
                                                                payload: {
                                                                    sessionLength: number
                                                                } 
                                                            }[]
                                                        }
                                                ) {
    const { payload } = props

    return (
        <div className="toltip-bar-chart">
            {/* payload and payload[0] must be define */}
            {payload && payload[0] && payload[0].payload.sessionLength} min
        </div>
    )
}