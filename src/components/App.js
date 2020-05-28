import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/" component={Home} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
