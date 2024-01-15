// React router
import { Link } from 'react-router-dom'

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

            <nav className="header__nav">
                <ul className="header__nav__link">
                    <li>
                        Accueil
                    </li>
                    <li>
                        <Link to="profil/1">
                            <span>Profil</span>
                        </Link>
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