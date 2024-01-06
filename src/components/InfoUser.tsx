export default function InfosUser (props: 
    {backgroundClass: string, urlIcon: string, text: string, unit: string, data: string
}) {
    const { backgroundClass, urlIcon, text, unit, data} = props

    return data && (
        <li className="profile__container__performance__info">
            <figure className={`profile__container__performance__info__icon-background ${backgroundClass}`}>
                <img src={urlIcon} />
            </figure>

            <div className="profile__container__performance__info__data">
                <span className="profile__container__performance__info__data__value">{data}{unit}</span>
                <div>{text}</div>
            </div>
        </li>
    )
}