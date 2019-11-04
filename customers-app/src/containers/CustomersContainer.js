import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList'
import CustomersActions from '../components/CustomersActions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {  fetchCustomers } from '../actions/fetchCustomers';
import PropTypes from 'prop-types';



class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers();
    }
    
    handleAddNew = () =>{
        this.props.history.push('/customers/new')
    }
    
    renderBody = customers => (
        <div>
            <CustomerList customers = {customers}
                urlPath={'customers/'}>

            </CustomerList>
            <CustomersActions>
                <button onClick = {this.handleAddNew}> Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );
    
    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'}
                body = {this.renderBody(this.props.customers)}>

                </AppFrame>
            </div>
        );
    }
}
CustomersContainer.prototypes = {
    fetchCoustomers:PropTypes.func.isRequired,
    customers:PropTypes.array.isRequired,
}

CustomersContainer.defaultProps ={
    customers: [
        {
            "dni":"30661300",
            "name": "mauro Mosconi",
            "age":35
        },
        {
            "dni":"22456444",
            "name": "juan perez",
            "age":31
        },
        {
            "dni":"32222344",
            "name": "Miguel perez",
            "age":22
        }
    ]
}

export default  withRouter(connect(null,{fetchCustomers}) (CustomersContainer));