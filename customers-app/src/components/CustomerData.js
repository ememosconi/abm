import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name,dni,age}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong><i>{name}</i></div>/div>
                <div><strong>DNI</strong><i>{dni}</i></div>
                <div><stro>Edad</stro><i>{age}</i></div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
   name:PropTypes.string.isRequired, 
   dni:PropTypes.string.isRequired,
   age:PropTypes.number,
};

export default CustomerData;