import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm,Field}from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions'



const validate = values => {
    const errors ={};

    if(!values.name){
        errors.name = "El campo nombre es obligatorio";
    }
    if(!values.dni){
        errors.dni = "El campo dni es obligatorio";
    }
    if(!values.age){
        errors.age = "El campo age es obligatorio";
    }

    return errors;
}

const isNumber = value  => (isNaN(Number(value))&& "Este campo debe ser un número");

const InputValidator = ({input,meta,type,label,name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={type?type:"text"}/>
        { meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
);



const CustomerEdir = ({name, dni, age,handleSubmit,submitting,handleCancel}) => {
    return (
        <div key={dni} >
            <h2>Edicion del cliente</h2>
            <form onSubmit = {handleSubmit}>

                   <Field 
                    name="name"
                    component={InputValidator} 
                    type="text"
                    label="Nombre"/>

                    <Field name="dni" 
                    validate={isNumber}
                    component={InputValidator} 
                    type="text"
                    label="DNI"/>

                    <Field name="age" 
                    validate ={isNumber}
                    component={InputValidator} 
                    type="number"
                    label="Edad"/>

                    <CustomersActions>
                        <button type="submit" disabled ={submitting}>Aceptar</button>
                        <button onClick={handleCancel}>Cancelar</button>
                    </CustomersActions>
                
            </form>
        </div>
    );
};

CustomerEdir.propTypes = {
    name: PropTypes.string.isRequired,
    dni:PropTypes.string.isRequired,
    age:PropTypes.number,
    handleCancel:PropTypes.func.isRequired,
};

export default setPropsAsInitial(reduxForm({form:'CustomerEdir', validate})(CustomerEdir));