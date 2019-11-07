import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppFrame from '../components/AppFrame';
import {withRouter} from 'react-router-dom';
import CustomerEdir from '../components/CustomerEdir';
import {createCustomer} from '../actions/createCustomer';
import {SubmissionError} from 'redux-form'

class NewCustomerConainer extends Component {
    
    handleSubmmit = values =>{
       return this.props.createCustomer(values).catch(r =>{
            console.log(r)
            throw new SubmissionError(r);
            
        });
    }

    handleOnBack =() =>{
        this.props.history.goBack();
    }

    handleSubmmitSucces =() =>{
        this.props.history.goBack();
    }

    renderBody =() =>{
        return <CustomerEdir {...this.props.customer}
         onSubmit = {this.handleSubmmit}
        onSubmitSuccess = {this.handleSubmmitSucces}
        onBack = {this.handleOnBack}
        ></CustomerEdir>
    }
    
    render() {
        return (
            <div>
                <AppFrame header="Nuevo Cliente"
                body={
                    this.renderBody()               
                }>
                    
                </AppFrame>              
            </div>
        );
    }
}

NewCustomerConainer.propTypes = {
    createCustomer:PropTypes.func.isRequired,
};

export default withRouter( connect(null,{createCustomer}) (NewCustomerConainer));