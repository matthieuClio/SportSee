// Style
import './header.scss'

export default function Header () {
    return (
        <header className="header">
            <div className="header__logo">
                <figure className="header__logo__figure">
                    <img src="/images/logo.svg" className="header__logo__figure__image" alt="logo" />
                </figure>

                <span className="header__logo__text">
                    SportSee
                </span>
            </div>

            <nav>
                <ul className="header__link">
                    <li className="header__link__text">
                        Accueil
                    </li>
                    <li className="header__link__text">
                        Profil
                    </li>
                    <li className="header__link__text">
                        Réglage
                    </li>
                    <li className="header__link__text">
                        Communauté
                    </li>
                </ul>
            </nav>
        </header>
    )
}