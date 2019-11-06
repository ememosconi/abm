import {combineReducers} from 'redux';
import {customers} from './customers';
import {customer}from './customer';
import {reducer as reduxForm} from 'redux-form'

export default combineReducers({
    customers,
    customer,
    form: reduxForm
});