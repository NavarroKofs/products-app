import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const SearchPageComponent = lazy(() =>
  import("./components/pages/SearchPageComponent")
);
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <SearchPageComponent />} />
      <Route path="*">
        <h1>Not Found</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
