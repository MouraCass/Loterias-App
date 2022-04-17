import { BrowserRouter, Switch, Route } from "react-router-dom";
import Errorpage from "../pages/Errorpage/Errorpage";
import Homepage from "../pages/Homepage/Homepage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route>
          <Errorpage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
