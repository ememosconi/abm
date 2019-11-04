import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';
import '../index.css';

const AppFrame = ({header,body,footer}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header}></AppHeader>
                <div>
                    {body}
                </div>
                <div>
                    Apliacion Simple de ejemplo
                </div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header:PropTypes.string.isRequired,
    body:PropTypes.element.isRequired,
    
};

export default AppFrame;