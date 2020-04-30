import React , {useEffect , useState} from 'react';
import HomePage from './page/Home.page';
import NavBar from './component/NavBar';
import GraphPage from './page/Graph.page';
import OverviewPage from './page/Overview.page';
import AddPage from './page/AddGraph.page';
import axios from 'axios';
import { Link, BrowserRouter as Router, Route, Switch , HashRouter} from 'react-router-dom';

function App() {
  const [data, setData] = useState({})
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('opendata-app.hii.or.th/water-api')
      setData(response.data)
    }

    fetchData()
    return () => {}
  }, [])

  return (
    <HashRouter basename='/'>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={OverviewPage} />
          <Route path="/model" component={HomePage} />
          <Route path="/Graph" component={GraphPage} />
          <Route path="/AddGraph" component={AddPage} />
]        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
