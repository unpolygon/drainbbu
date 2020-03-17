import React from 'react';
import HomePage from './page/Home.page';
import NavBar from './component/NavBar';
import GraphPage from './page/Graph.page';
import OverviewPage from './page/Overview.page';
import { Link, BrowserRouter as Router, Route, Switch , HashRouter} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={OverviewPage} />
          <Route path="/model" component={HomePage} />
          <Route path="/Graph" component={GraphPage} />
]        </Switch>
      </div>
    </Router>
  );
}

export default App;
