import {handleActions} from 'redux-actions';
import {FETCH_CUSTOMER } from '../constants';



export const customer = handleActions({
    
    [FETCH_CUSTOMER]: (state, action) =>{ 
        return action.payload}
},{});