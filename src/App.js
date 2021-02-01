import './App.css';
import Navigation from './components/Navigation';
import {HashRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Navigation/>
        <Switch>
            <Route path='/home' exact />
        </Switch>
    </Router>
    </>
  );
}

export default App;
