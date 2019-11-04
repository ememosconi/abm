import {handleActions} from 'redux-actions';
import {FETCH_CUSTOMERSRS } from '../constants';



export const customers = handleActions({
    
    [FETCH_CUSTOMERSRS]: (state, action) =>{ 
        return [...action.payload]}
},[]);