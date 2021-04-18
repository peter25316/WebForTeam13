import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Commands from "./components/commands";
import Random from "./components/random";
import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/commands">
          <Commands />
        </Route>
        <Route exact path="/random">
          <Random />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
