import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
    <p className="alert alert-danger error">{ message }</p>
);
 

//Documenting the app
Error.propTypes = {
    message: PropTypes.string.isRequired
}
export default Error;