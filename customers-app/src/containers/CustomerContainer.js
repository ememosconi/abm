import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import {  fetchCustomer } from '../actions/fetchCustomers';
import { getCustomer, getCustomerByDni } from '../selectors/customers';
import {withRouter,Route} from 'react-router-dom';
import CustomerEdir from '../components/CustomerEdir'
import CustomerData from '../components/CustomerData'

class CustomerContainer extends Component {


    renderBody = () =>(
        <Route path="/customers/:dni/edit" children ={({match}) => {
            const CustomerControl = match?CustomerEdir:CustomerData
            return <CustomerControl {...this.props.customer}></CustomerControl>
        }}/>
                                                        
    )
    //<p>Datos del cliente "{this.props.customer.name}"</p>
    
    render() {
        return (
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`} 
                body={this.renderBody()}>

                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    customer:PropTypes.object.isRequired,
};

const mapStateToProps = (state, props)=>({
    customer: getCustomerByDni(state,props)
});





export default withRouter(connect(mapStateToProps,null)(CustomerContainer))