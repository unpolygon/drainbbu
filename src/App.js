import React from 'react';
import HomePage from './page/Home.page';
import NavBar from './component/NavBar';
import GraphPage from './page/Graph.page';
import OverviewPage from './page/Overview.page';
import { Link, BrowserRouter as Router, Route, Switch , HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter basename= '\'>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Overview" component={OverviewPage} />
          <Route path="/Graph" component={GraphPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
