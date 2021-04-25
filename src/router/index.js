import { lazy, Route, Switch, Suspense, Redirect } from 'react-router-dom'

import Loading from '../components/loading'
const Home = lazy(() => import('../pages/home'))
const City = lazy(() => import('../pages/city'))

const Router = () => {
  return (
    <Switch>
      <Suspense fallback={<Loading />}>
        <Route path='/home' component={Home} />
        <Route path='/city:id' component={City} />
        <Redirect to='/home' />
      </Suspense>
    </Switch>
  )
}

export default Router