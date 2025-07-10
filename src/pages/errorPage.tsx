import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../globals/theme'

export function ErrorPage() {
  const { theme } = useContext(ThemeContext)
  const error = useRouteError()
  console.error(error)

  return (
    <div className="stack background error" data-theme={theme}>
      <div className="stack error" id="error">
        <h1 className="page-title title">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="error-msg">
            {isRouteErrorResponse(error)
              ? // note that error is type `ErrorResponse`
                error.data || error.statusText
              : 'Unknown error message'}
          </i>
        </p>
      </div>
    </div>
  )
}
