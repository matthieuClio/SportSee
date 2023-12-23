import { Fragment } from "react"

// Style
import './renderLegend.scss'

export default function RenderLegend (props: { payload?: [], }) {
    const { payload } = props
    const labelText:string[] = ['Poids (kg)', 'Calories brûlées (kCal)']

    return (
        <div className="legend-container">
            <div className="legend-container__title">Activité quotidienne</div>

            <div className="legend-container__legend">
                {
                    // If payload is define
                    payload && payload.map((entry: { value:string, color:string }, index:number) => (
                        <Fragment key={`item-${index}`}>
                            
                                <div className="legend-container__legend__design-legend" style={{backgroundColor:entry.color}}></div>
                                <div>{labelText[index]}</div>
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}