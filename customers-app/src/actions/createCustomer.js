import{createAction} from 'redux-actions'
import {CREATE_CUSTOMER} from '../constants/index'
import { apiPost } from '../api'
import { urlCustomers } from '../api/url'

export const createCustomer = createAction(CREATE_CUSTOMER, (customer) => apiPost(urlCustomers,customer)())