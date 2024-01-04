export default function InfosUser (props: {backgroundClass: string, urlIcon: string, text: string, data: {
    calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number
} 
}) {
    const { backgroundClass, urlIcon, text, data} = props

    return data && (
        <li className="profile__container__info">
            <figure className={`profile__container__info__icon-background ${backgroundClass}`}>
                <img src={urlIcon} />
            </figure>

            <div>
                {data.calorieCount}Kcal
                <div>{text}</div>
            </div>
        </li>
    )
}