import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions'

const CustomerData = ({dni,name,age,handleCancel}) => {
    return (
        <div key={dni}>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
            </div>
            <CustomersActions>
            <button onClick={handleCancel}>Cancelar</button>
            </CustomersActions>

        </div>
        
        
    );
};

CustomerData.propTypes = {
   name:PropTypes.string.isRequired, 
   dni:PropTypes.string.isRequired,
   age:PropTypes.number,
   handleCancel:PropTypes.func.isRequired,
};

export default CustomerData;