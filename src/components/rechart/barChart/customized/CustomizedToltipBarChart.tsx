// Style
import './customizedToltipBarChart.scss'

export default function CustomizedToltipBarChart (props:{ active?:boolean, payload?:[], label?:string }) {
    const { label } = props

    return (
        <div className="toltip">
            {label}
        </div>
    )
}