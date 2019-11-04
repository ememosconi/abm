import React, {Component} from 'react';
import{ BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {
  
  renderHome = () => <HomeContainer></HomeContainer>
  renderCustomerContainer = () => <h1>Customer container</h1>
  renderCustomerListContainer = () => <CustomersContainer></CustomersContainer>
  renderCustomerNewContainer = () => <h1>Customer New container</h1>
  
  render(){
    return (
      <Router>
        <div >
          <Route exact path='/' component={this.renderHome}/>
          <Route exact path='/customers' component={this.renderCustomerListContainer}/>
          <Switch>
            <Route path='/customers/new' component={this.renderCustomerNewContainer}/>
            <Route path='/customers/:dni' component={this.renderCustomerContainer}/>
          </Switch>
        </div>
      </Router>
      
    );
  }
 
}

export default App;
