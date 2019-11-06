import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import {getCustomerByDni } from '../selectors/customers';
import {withRouter,Route} from 'react-router-dom';
import CustomerEdir from '../components/CustomerEdir';
import CustomerData from '../components/CustomerData';
import {  fetchCustomers } from '../actions/fetchCustomers';
import {  updateCustomer } from '../actions/updateCustomer';

class CustomerContainer extends Component {

    componentDidMount(){
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }


    handleSubmit = values =>{
        console.log(JSON.stringify(values));
        const {id} = values;
        this.props.updateCustomer(id,values);
    }

    handleOnBack =() =>{
        this.props.history.goBack();
    }

    renderBody = () =>(
        <Route path="/customers/:dni/edit" children ={({match}) => {
            const CustomerControl = match?CustomerEdir:CustomerData
            return <CustomerControl {...this.props.customer} 
            handleCancel ={this.handleOnBack}
            onSubmit={this.handleSubmit}>

            </CustomerControl>
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





export default withRouter(connect(mapStateToProps,
    {
        fetchCustomers,
        updateCustomer
    })(CustomerContainer))