import { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './index.less'

import Loading from '../components/loading'
const Home = lazy(() => import('../pages/home'))
const City = lazy(() => import('../pages/city'))

const Router = () => {
  return (
    <div className="router">
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route path='/home' component={Home} />
          <Route path='/city:id' component={City} />
          <Redirect to='/home' />
        </Suspense>
      </Switch>
    </div>
  )
}

export default Router