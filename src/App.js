// import logo from './logo.svg';
import "./App.scss";
import "./comps/Login.jsx";

// import Login from './comps/Login.jsx';
// import Loginuser from './comps/Loginuser';
// import { Router, BrowserRouter ,Switch} from "react-router-dom";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";




import LogIn from "./isomorphic/Maincomp/login/LogIn";
import Dashboard from "./isomorphic/Maincomp/dashboard/Dashboard";

import Reusedashbord from "./isomorphic/Maincomp/dashboard/Reusedashbord.jsx";
import Chat from "./isomorphic/Maincomp/dashboard/Chat";
import Ecommerce from "./isomorphic/Maincomp/dashboard/Ecommerce";
import Demo1 from "./isomorphic/Maincomp/Demo/Demo1";
import RecipeList from "./isomorphic/Maincomp/Cooking/RecipeList";
import MainRecipe from "./isomorphic/Maincomp/Cooking/MainRecipe";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/email" component={Reusedashbord} />
        <Route path="/chat" component={Chat} />
        <Route path="/ecommerce" component={Ecommerce} />
        <Route path="/demo" component={Demo1} />
        <Route path="/recipe" component={MainRecipe} />
        
      
      </Switch>
    </Router>
  );
}

export default App;
