import {handleActions} from 'redux-actions';
import {FETCH_CUSTOMERSRS, CREATE_CUSTOMER, UPDATE_CUSTOMER } from '../constants';



export const customers = handleActions({
    
    [FETCH_CUSTOMERSRS]: (state, action) =>{ 
        return [...action.payload]},
    [CREATE_CUSTOMER]:(state,action) => {
        return [...state,action.payload]},
    [UPDATE_CUSTOMER]:(state,action) =>{
        const payload = action.payload;
        return state.reduce((acc,customer) =>{
            if(customer.id === payload.id){
                return [...acc,payload]
            }
            else return [...acc,customer]
        },[]) 
    }   
},[]);