import { Route } from './components/Route.jsx'
import { Header } from './components/Header.jsx'
import { Home } from './pages/Home.jsx'
import { MyRecepies } from './pages/MyRecepies.jsx'
import { RecepieDetail } from './pages/RecepieDetail.jsx'
import { PATHS } from './config/constants.js'

function App() {
  return (
    <>
      <Header />
      <Route path={PATHS.home} component={Home} />
      <Route path={PATHS.myRecepies} component={MyRecepies} />
      <Route path={PATHS.recepieDetail} component={RecepieDetail} />
    </>
  )
}

export default App

