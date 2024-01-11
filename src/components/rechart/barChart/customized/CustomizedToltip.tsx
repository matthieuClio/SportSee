// Style
import './customizedToltip.scss'

export default function CustomToltip (props:{ active?:boolean, payload?:[], label?:string }) {
    const { label } = props

    return (
        <div className="toltip">
            {label}
        </div>
    )
}