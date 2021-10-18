import Users from "./components/Users";
import HomeGuest from "./components/HomeGuest";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          {" "}
          <HomeGuest />{" "}
        </Route>

        <Route path="/user" exact>
          {" "}
          <Users />{" "}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
