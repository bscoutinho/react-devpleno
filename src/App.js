import React from 'react'
import Header from './components/Header'
import Generos from './components/Generos'
import NovoGenero from './components/NovoGenero'
import EditarGenero from './components/EditarGenero'
import Series from './components/Series'
import NovaSerie from './components/NovaSerie'
import InfoSerie from './components/InfoSerie'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Home = () => {
  return <h1>Home Page</h1>
}

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/generos" exact component={Generos} />
          <Route path="/generos/novo" exact component={NovoGenero} />
          <Route path="/generos/:id" exact component={EditarGenero} />
          <Route path="/series" exact component={Series} />
          <Route path="/series/novo" exact component={NovaSerie} />
          <Route path="/series/:id" exact component={InfoSerie} />
        </Switch>

      </div>
    </Router>

  )
}

export default App
