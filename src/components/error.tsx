import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export function Error() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='stack error' id='error'>
      <h1 className='title'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='error-msg'>
          {isRouteErrorResponse(error)
            ? // note that error is type `ErrorResponse`
              error.data?.message || error.statusText
            : 'Unknown error message'}
        </i>
      </p>
    </div>
  )
}
