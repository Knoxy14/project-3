import './App.css';
import NavBar from './components/Navbar/NavBar';
import { useAuth0 } from './react-auth0-spa';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import Collection from "./components/Collection"
import AddToCollection from "./components/AddToCollection/AddToCollection"
import LandingPage from './components/LandingPage/LandingPage';
import Spinner from 'react-bootstrap/Spinner'

function App() {
  const {loading} = useAuth0();

  if (loading) {
    return (

<div className="App">
        <Spinner animation="border" />
    </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/collection' component={Collection} />
          <PrivateRoute path='/addToCollection' component={AddToCollection} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;