import { Loading } from 'atoms'
import PropTypes from 'prop-types'
import React, { lazy, Suspense, useCallback } from 'react'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { Routers } from 'utils'
import { PublicTemplate, PrivateTemplate } from 'templates'

import { useToken, useRequestManager } from 'hooks'
import { globalUserState } from 'stores/profile/atom'
import { globalUnitsState } from 'stores/Units/atom'
import { useSetRecoilState } from 'recoil'
import { EndPoint } from 'config/api'
import jwtDecode from 'jwt-decode'
import { withArray } from 'exp-value'

//  public page
const LoginPage = lazy(() => import('pages/UnAuthPages/Login'))
// const RegisterPage = lazy(() => import('pages/UnAuthPages/Register'))
const ForgotPasswordPage = lazy(() =>
  import('pages/UnAuthPages/ForgotPassword')
)
const ResetPasswordPage = lazy(() => import('pages/UnAuthPages/ResetPassword'))

// private page
const DashboardPage = lazy(() => import('pages/AuthPages/Dashboard'))
const StatisticsPage = lazy(() => import('pages/AuthPages/Statistics'))
const HistoryPage = lazy(() => import('pages/AuthPages/History'))
const CheckInRequestPage = lazy(() => import('pages/AuthPages/CheckInRequest'))
const CheckListPage = lazy(() => import('pages/AuthPages/CheckList'))
const CheckListCreate = lazy(() =>
  import('pages/AuthPages/CheckList/CheckListCreate')
)
const StaffsPage = lazy(() => import('pages/AuthPages/Staffs'))

const ProfilePage = lazy(() => import('pages/AuthPages/Profile'))
const ProfileUpdatePage = lazy(() =>
  import('pages/AuthPages/Profile/UpdateProfile')
)
const UpdatePasswordPage = lazy(() =>
  import('pages/AuthPages/Profile/UpdatePassword')
)

const PreviewsPage = lazy(() => import('pages/Previews'))

const Routes = ({ isLoggedIn, ...rest }) => {
  const location = useLocation()
  const { token } = useToken()
  const history = useHistory()
  const setUserState = useSetRecoilState(globalUserState)
  const setUnitsState = useSetRecoilState(globalUnitsState)
  const { onGetExecute } = useRequestManager()

  const getUserInfor = useCallback(token => {
    const loggedAdmin = jwtDecode(token)
    setUserState(loggedAdmin)
  }, [])

  const getUnitsArray = useCallback(
    async token => {
      const loggedAdmin = jwtDecode(token)
      const response = await onGetExecute(
        EndPoint.UNITS_LIST(loggedAdmin.enterpriseId),
        {
          params: { offset: 0, limit: 1000 }
        }
      )
      if (response) {
        setUnitsState(
          withArray('data', response).map(u => {
            return { ...u, label: u.name, value: u.id }
          })
        )
      }
    },
    [location.pathname, token, isLoggedIn]
  )

  React.useEffect(() => {
    if (isLoggedIn) {
      getUserInfor(token)
      getUnitsArray(token)
    }
  }, [isLoggedIn, token, location.pathname])

  React.useEffect(() => {
    const { pathname } = location
    const validNormalAdminUrls = [
      ...Routers.NORMAL_ADMIN.MENU,
      ...Routers.NORMAL_ADMIN.PROFILE.CHILD,
      ...Routers.NORMAL_ADMIN.CHECKLIST.CHILD,
      { URL: Routers.NORMAL_ADMIN.PROFILE.URL }
    ]
    if (isLoggedIn) {
      let isValidPath = false
      validNormalAdminUrls.forEach(item => {
        if (item.URL === pathname) {
          isValidPath = true
        }
      })
      if (!isValidPath) {
        history.push(Routers.NORMAL_ADMIN.MENU[0].URL)
      }
    }
  }, [location, isLoggedIn])

  const _renderPrivateNormalAdminRoute = React.useCallback(() => {
    return (
      <PrivateTemplate menuList={Routers.NORMAL_ADMIN.MENU}>
        <Route
          {...rest}
          exact
          path={Routers.PREVIEWS}
          render={props => {
            return <PreviewsPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.MENU[0].URL}
          render={props => {
            return <DashboardPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.MENU[1].URL}
          render={props => {
            return <StatisticsPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.MENU[2].URL}
          render={props => {
            return <HistoryPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.MENU[3].URL}
          render={props => {
            return <CheckInRequestPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.MENU[4].URL}
          render={props => {
            return <CheckListPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.CHECKLIST.CHILD[0].URL}
          render={props => {
            return <CheckListCreate {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.MENU[5].URL}
          render={props => {
            return <StaffsPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.PROFILE.URL}
          render={props => {
            return <ProfilePage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.PROFILE.CHILD[0].URL}
          render={props => {
            return <UpdatePasswordPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.NORMAL_ADMIN.PROFILE.CHILD[1].URL}
          render={props => {
            return <ProfileUpdatePage {...rest} {...props} />
          }}
        />
      </PrivateTemplate>
    )
  }, [isLoggedIn])

  const _renderPublicRoute = React.useCallback(() => {
    return (
      <PublicTemplate>
        <Route
          {...rest}
          exact
          path={'/'}
          render={props => {
            return <LoginPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          exact
          path={Routers.LOGIN}
          render={props => {
            return <LoginPage {...rest} {...props} />
          }}
        />
        {/* <Route
          {...rest}
          exact
          path={Routers.REGISTER}
          render={props => {
            return <RegisterPage {...rest} {...props} />
          }}
        /> */}
        <Route
          {...rest}
          exact
          path={Routers.FORGOT_PASSWORD}
          render={props => {
            return <ForgotPasswordPage {...rest} {...props} />
          }}
        />
        <Route
          {...rest}
          path={Routers.RESET_PASSWORD}
          render={props => {
            return <ResetPasswordPage {...rest} {...props} />
          }}
        />
      </PublicTemplate>
    )
  }, [isLoggedIn])

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {isLoggedIn !== null
          ? isLoggedIn
            ? _renderPrivateNormalAdminRoute()
            : _renderPublicRoute()
          : null}
      </Switch>
    </Suspense>
  )
}

Routes.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default Routes
