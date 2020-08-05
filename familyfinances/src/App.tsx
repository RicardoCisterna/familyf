import React from "react";
import logo from "./logo.svg";
import { History } from "history";
import NavBar from "./components/NavBar";
import { Route } from "react-router";
import Transactions from "./containers/Transactions";
import LoginForm from './components/EditTransaction'



interface IAppProps {
  history: History;
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Route component={NavBar} path="/" exact={false} />
        <Route component={LoginForm} path="/app" exact={true} />
      </div>
    );
  }
}

export default App;
