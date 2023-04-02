import React, { useState } from 'react';
import '../styles/App.css';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Store from './Store';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="main">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link>Register</Link>
            </li>
            <li>
              <Link>Login</Link>
            </li>
            <li>
                <Link>Store</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route>
            <Register />
          </Route>
          <Route>
            <Login  />
          </Route>
          <Route>
            <Store />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
