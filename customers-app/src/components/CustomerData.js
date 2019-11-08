import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions'

const CustomerData = ({dni,name,age,onBack, isDeleteAllowed,handleDelete}) => {
    return (
        <div key={dni}>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
            </div>
            <CustomersActions>
            <button onClick={onBack}>Cancelar</button>
            {isDeleteAllowed&&<button onClick={handleDelete}>Eliminar</button>}
            </CustomersActions>

        </div>
        
        
    );
};

CustomerData.propTypes = {
   age:PropTypes.number,
   onBack:PropTypes.func.isRequired,
   isDeleteAllowed:PropTypes.bool.isRequired,
   handleDelete:PropTypes.func.isRequired,
};

export default CustomerData;