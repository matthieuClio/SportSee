export default function CustomToltip (props:{ active?:boolean, payload?:[], label?:string }) {
    const { label } = props

    return (
        <div style={{height:'100px', width:'100px', backgroundColor: 'red', color: 'white'}}>
            {label}
        </div>
    )
}