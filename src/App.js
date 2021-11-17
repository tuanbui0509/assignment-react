import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Navbar';
import routes from './routes/router';
import { ContextProvider } from "./store/context/Context";

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

  return (
    <ContextProvider>
      <Router>
        <Menu />
        <div className="container mt-2">
          <div className="row">
            {showContentMenus(routes)}
          </div>
        </div>
      </Router>
    </ContextProvider>

  )
}

export default App
