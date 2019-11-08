import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomer } from '../selectors/customers';
import {withRouter,Route} from 'react-router-dom';
import CustomerEdir from '../components/CustomerEdir';
import CustomerData from '../components/CustomerData';
import {  fetchCustomers } from '../actions/fetchCustomers';
import {  updateCustomer } from '../actions/updateCustomer';
import {  fetchCustomer} from '../actions/fetchCustomer';
import {SubmissionError} from 'redux-form'

class CustomerContainer extends Component {

    componentDidMount(){
        this.props.fetchCustomer(this.props.dni)
    }


    handleSubmit = values =>{
        console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.updateCustomer(id,values).catch(r =>{
            console.log(r)
            throw new SubmissionError(r);
            
        });
    }

    handleOnBack =() =>{
        this.props.history.goBack();
    }

    handleSubmitSuccess =()=>{
        this.props.history.goBack();
    }

    handleDelete = () =>{
        console.log("estas borrando")
    }

    renderCustomerEdit = (isEdit,isDel) =>{
        console.log(isEdit, isDel)
        if(this.props.customer){
            console.log("pase");
            const CustomerControl = isEdit?CustomerEdir:CustomerData;
            console.log(CustomerControl)
            return <CustomerControl {...this.props.customer} 
            onSubmit={this.handleSubmit}
            onSubmitSuccess ={this.handleSubmitSuccess}
            onBack ={this.handleOnBack}
            isDeleteAllowed ={!!isDel}
            handleDelete={this.handleDelete}/>;

            
        }
        return null;
        
    }

    renderBody = () =>(
        <Route path="/customers/:dni/edit" children ={
            ({match: isEdit}) => (
            <Route path="/customers/:dni/delete" children ={({match: isDel}) => (
                this.renderCustomerEdit(isEdit,isDel)
        )}/>)
        }/>
                                                        
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
    customer:PropTypes.object,
};

const mapStateToProps = (state, props)=>({
    customer: getCustomer(state)
});





export default withRouter(connect(mapStateToProps,
    {
        fetchCustomers,
        updateCustomer,
        fetchCustomer
    })(CustomerContainer))