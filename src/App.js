import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';

class App extends React.Component { 
    render() {
   return (
     <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path ='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn} /> 
          <Route path= '/signup' component={SignUp} />
          <Route path= '/create' component={CreateProject} />

        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
