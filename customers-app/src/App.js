import React, {Component} from 'react';
import{ BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerConainer from './containers/NewCustomerConainer';

class App extends Component {
  
  renderHome = () => <HomeContainer></HomeContainer>
  renderCustomerListContainer = () => <CustomersContainer></CustomersContainer>
  
  
  render(){
    return (
      <Router>
        <div >
          <Route exact path='/' component={this.renderHome}/>
          <Route exact path='/customers' component={this.renderCustomerListContainer}/>
          <Switch>
            <Route path='/customers/new' component={NewCustomerConainer}/>
            <Route path='/customers/:dni' render={props => <CustomerContainer dni={props.match.params.dni}/>}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
 
}

export default App;
