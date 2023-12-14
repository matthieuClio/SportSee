import { Outlet } from 'react-router'

// Style
import './menu.scss'

export default function Menu () {
    return (
        <div className="main-container">
            <nav className="main-container__menu">
                <ul className="main-container__menu__container">
                    <li className="main-container__menu__container__icon">
                        <img src="/images/icon/yoga-icon.svg" alt="yoga" className="main-container__menu__container__icon__image" />
                    </li>

                    <li className="main-container__menu__container__icon">
                        <img src="/images/icon/swimming-icon.svg" alt="yoga" className="main-container__menu__container__icon__image" />
                    </li>

                    <li className="main-container__menu__container__icon">
                        <img src="/images/icon/bike-icon.svg" alt="yoga" className="main-container__menu__container__icon__image" />
                    </li>

                    <li className="main-container__menu__container__icon">
                        <img src="/images/icon/weights-icon.svg" alt="yoga" className="main-container__menu__container__icon__image" />
                    </li>

                    <li className="main-container__menu__container__text">
                        Copiryght, SportSee 2020
                    </li>
                </ul>
            </nav>
            
            <Outlet />
        </div>
    )
}