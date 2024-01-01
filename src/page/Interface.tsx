import { Link } from 'react-router-dom'

export default function Interface () {
    return (
        <>
            <h1>Choisissez les données API ou simulés</h1>

            <Link to='/app/profil/12'>
                <div>Données API</div>
            </Link>
            
            <Link to='/app/profil/1'>
                <div>Données Simulés</div>
            </Link>
        </>
    )
}