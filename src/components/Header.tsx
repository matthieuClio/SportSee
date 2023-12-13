import '../assets/sass/header.scss'

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
                    <li>
                        Accueil
                    </li>
                    <li>
                        Profil
                    </li>
                    <li>
                        Réglage
                    </li>
                    <li>
                        Communauté
                    </li>
                </ul>
            </nav>
        </header>
    )
}