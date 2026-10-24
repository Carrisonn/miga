import { Route } from './components/Route.jsx'
import { Header } from './components/Header.jsx'
import { APP_ROUTES } from './config/constants.js'

function App() {
  const { home, myRecepies, recepieDetail } = APP_ROUTES

  return (
    <>
      <Header />
      <Route path={home.path} component={home.component} />
      <Route path={myRecepies.path} component={myRecepies.component} />
      <Route path={recepieDetail.path} component={recepieDetail.component} />
    </>
  )
}

export default App

