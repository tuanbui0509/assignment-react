import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Navbar';
import Login from "./pages/Login";
import routes from './routes/router';

const showContentMenus = (routes) => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    })
  }
  return <Switch>{result}</Switch>
}
const App = () => {
  const isToken = useSelector((state) => state.Login)
  return (
    <>
      {isToken ? <Router>
        <Menu />
        <div className="container mt-2">
          <div className="row">
            {showContentMenus(routes)}
          </div>
        </div>
      </Router>
        : <Router>
          <Login />
        </Router>}

    </>
  )
}

export default App
