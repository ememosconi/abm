import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdir = (name, dni, age) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <h3>{name}/{dni}/{age}</h3>
        </div>
    );
};

CustomerEdir.propTypes = {
    name: PropTypes.string.isRequired,
    dni:PropTypes.string.isRequired,
    age:PropTypes.number,
};

export default CustomerEdir;