import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path = '/' component= {Home} exact/>
          <Route path = '/login' component= {Login} exact/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
