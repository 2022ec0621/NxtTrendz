<<<<<<< HEAD
import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')

  if (token === undefined) {
=======
// Write your JS code here
import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
>>>>>>> 1712507c74e2dc4d4c6ac9934c231e7bd015416b
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
