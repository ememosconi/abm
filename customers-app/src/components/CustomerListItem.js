import React from 'react';
import PropTypes from 'prop-types';
import{Link}from 'react-router-dom'

const CustomerListItem = ({name,editAction,delAction,urlPath,dni,id}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${urlPath}${id}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${id}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${id}/delete`}>{delAction}</Link>
                </div>

            </div>
            
        </div>
    );
};

CustomerListItem.propTypes = {
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    editAction:PropTypes.string.isRequired,
    delAction:PropTypes.string.isRequired,
};

export default CustomerListItem;