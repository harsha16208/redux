import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails"
import Header from "./components/Header"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
      <Route path="/" component={ProductsList} exact></Route>
      <Route path="/det/:id" component={ProductDetails}></Route>
      <Route ></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
