import React from "react"
import Signup from "../src/components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../src/contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard1 from "../src/components/Dashboard1"
import Login from "../src/components/Login"
import Navbar from "../src/components/Navbar"
import PrivateRoute from "../src/components/PrivateRoute"
import ForgotPassword from "../src/components/ForgotPassword"
import UpdateProfile from "../src/components/UpdateProfile"

function App() {
  return (
    <Container
      className="align-items-center justify-content-center"
    >
      {/* <Navbar/> */}
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard1} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App