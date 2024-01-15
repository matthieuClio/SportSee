// Style
import './infoUser.scss'

export default function InfosUser (props: 
    {backgroundClass: string, urlIcon: string, text: string, unit: string, data: number
}) {
    const { backgroundClass, urlIcon, text, unit, data } = props
    console.log(data)

    return data && (
        <li className="info-user">
            <figure className={`info-user__icon-background ${backgroundClass}`}>
                <img src={urlIcon} />
            </figure>

            <div className="info-user__data">
                <span className="info-user__data__value">{data}{unit}</span>
                <div>{text}</div>
            </div>
        </li>
    )
}