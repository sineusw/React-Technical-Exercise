import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './Header';
import LookUp from './pages/Lookup';
import Settings from './pages/Settings';


function App() {
  const [user, setUser ] = useState(null); 
  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser}/>
        <Switch>
{/* short cut for if condition, if the user is logged in then go to lookup page */}
          {user && <Route path = '/lookup' component= {LookUp} exact/>}
          {user && <Route path = '/settings' exact>
            {/* show settings componets and pass it through the user */}
            <Settings user={user} setUser={setUser}/>
            </Route>}
            {/* the default path  */}
          {!user && <Route path = '*'>
            <Login user={user} setUser={setUser} />
          </Route>}

        </Switch>
      </Router>
    
     
        

    
    </div>
  );
}

export default App;