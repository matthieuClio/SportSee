// React router
import { useRouteError } from 'react-router';

// Style
import './error.scss'

export default function Error () {
    // Get error object
    let error = useRouteError() as { status: number }

    // Define an error status if we make a manual redirection
    if (!error) {
        error = { status: 404 }
    }

    return (
        <div className="error-page">
            <div className="error-page__code">
                Erreur {error.status}
            </div>
            ...Oups, une erreur à été trouvée.
        </div>
    )
}