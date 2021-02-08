import './App.css';
import Navigation from './components/Navigation';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Aboutme from './components/pages/Aboutme';
import Portfolio from './components/pages/Portfolio';
import Qualifications from './components/pages/Qualifications';
import Service from './components/pages/Service';
import Secret from './components/pages/Secret';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop>
        <Navigation/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/About-Me' exact component={Aboutme}/>
            <Route path='/Portfolio' exact component={Portfolio}/>
            <Route path='/Qualifications' exact component={Qualifications}/>
            <Route path='/Service' exact component={Service}/>
            <Route path='/Secret-page' exact component={Secret}/>
        </Switch>
      </ScrollToTop>
    </Router>
    </>
  );
}

export default App;
