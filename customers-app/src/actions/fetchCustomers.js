import { FETCH_CUSTOMERSRS } from "../constants";
import {createAction} from 'redux-actions'
const url = 'http://localhost:3001/customers';
const apiFetchCustomers = () => fetch(url).then(result=>result.json())

export const fetchCustomers = createAction(FETCH_CUSTOMERSRS,apiFetchCustomers) ;