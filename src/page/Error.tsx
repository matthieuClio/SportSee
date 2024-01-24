import './error.scss'

import { useRouteError } from 'react-router';

export default function Error () {
    // Get error object
    let error = useRouteError() as { status: number }

    // Define an status error if we make a redirection
    error ? error : error = { status: 404 }

    return (
        <div className="error-page">
            <div className="error-page__code">
                Erreur {error.status}
            </div>
            ...Oups, une erreur à été trouvée.
        </div>
    )
}