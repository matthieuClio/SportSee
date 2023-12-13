import '../assets/sass/menu.scss'

export default function Menu () {
    return (
        <nav className="menu">
            <div className="menu__container">
                <div className="menu__container__icon">
                    <img src="/images/icon/yoga-icon.svg" alt="yoga" className="menu__container__icon__image" />
                </div>

                <div className="menu__container__icon">
                    <img src="/images/icon/swimming-icon.svg" alt="yoga" className="menu__container__icon__image" />
                </div>

                <div className="menu__container__icon">
                    <img src="/images/icon/bike-icon.svg" alt="yoga" className="menu__container__icon__image" />
                </div>

                <div className="menu__container__icon">
                    <img src="/images/icon/weights-icon.svg" alt="yoga" className="menu__container__icon__image" />
                </div>

                <div className="menu__container__text">
                    Copiryght, SportSee 2020
                </div>
            </div>
        </nav>
    )
}