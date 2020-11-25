import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignIn from "./views/SignIn";
import theme from "./theme/theme";
import Dashboard from "./views/Dashboard";
import Case2 from "./views/Case2";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/">
            <Case2/>
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
