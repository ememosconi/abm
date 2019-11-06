import{createAction} from 'redux-actions'
import { FETCH_CUSTOMER} from '../constants/index'
import { apiGet } from '../api'
import { urlCustomers } from '../api/url'

export const fetchCustomer = createAction(FETCH_CUSTOMER, (id) => apiGet(`${urlCustomers}/${id}`)())