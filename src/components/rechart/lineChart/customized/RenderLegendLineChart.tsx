// Style
import './renderLegendLineChart.scss'

export default function RenderLegendLineChart (props: { payload?: { color: string }[] }) {
    const { payload } = props

    return (
        <div style={payload && { color: payload[0].color }} className="render-legend-line-chart">
            Durée moyenne des sessions
        </div>
    )
}