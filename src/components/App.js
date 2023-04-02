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
          <Switch>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/login'>
        <Login setIsLoggedIn={setIsLoggedIn} />
      </Route>
      {isLoggedIn && (
        <Route path='/store'>
          <Store setIsLoggedIn={setIsLoggedIn} />
        </Route>
      )}
      <Redirect to='/login' />
    </Switch>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
