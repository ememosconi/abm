import { FETCH_CUSTOMERSRS } from "../constants";
import {createAction} from 'redux-actions'

export const fetchCustomers = createAction(FETCH_CUSTOMERSRS);