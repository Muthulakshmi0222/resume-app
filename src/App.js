import './App.css';
import ResponsiveAppBar from './Landingpage';
import {BrowserRouter as Route,Switch} from 'react-router-dom';
import TemplateData from '../src/components/TemplateData';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ResponsiveAppBar />
        </Route>
        <Route exact path='/templates' component={TemplateData} />
      </Switch>
      </div>
  );
}

export default App;
