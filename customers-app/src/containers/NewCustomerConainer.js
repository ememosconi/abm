import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppFrame from '../components/AppFrame';
import {withRouter} from 'react-router-dom';
import CustomerEdir from '../components/CustomerEdir';

class NewCustomerConainer extends Component {
    
    handleSubmmit = values =>{

    }

    handleOnBack =() =>{
        this.props.history.goBack();
    }

    handleSubmmitSucces =() =>{
        this.props.history.goBack();
    }

    renderBody =() =>{
        return <CustomerEdir onSubmmit = {this.handleSubmmit}
        onSubmmitSucces = {this.handleSubmmitSucces}
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

};

export default withRouter( connect(null,null) (NewCustomerConainer));