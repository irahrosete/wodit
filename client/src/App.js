import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import EditExercise from './components/EditExercise'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import Wods from './components/Wods'
import Exercises from './components/Exercises'
import Girls from './pages/Girls'
import Footer from './components/Footer'
import Heroes from './pages/Heroes'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <EditExercise />
          </Route>
          <Route path='/login'>
            <LogIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/wods'>
            <Wods />
          </Route>
          <Route path='/exer'>
            <Exercises />
          </Route>
          <Route path='/girls'>
            <Girls />
          </Route>
          <Route path='/heroes'>
            <Heroes />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
