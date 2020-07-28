import React from "react";
import logo from "./logo.svg";
import {History} from 'history'
import NavBar from './components/NavBar'
import {Route} from 'react-router'

interface IAppProps {
  history: History;
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Route component={NavBar} path="/app" exact={false}/>

    );
  }
}

export default App;
