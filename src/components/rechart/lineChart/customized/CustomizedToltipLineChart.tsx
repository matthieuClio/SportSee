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

    return payload && (
        <div className="toltip-bar-chart">
            {payload[0] && payload[0].payload.sessionLength} min
        </div>
    )
}