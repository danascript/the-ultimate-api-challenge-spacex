import React from 'react';
// style
import './style.scss';

const Error = ({ error }) => (
    <div className="error__container d-flex justify-content-center align-items-center">
        <h3>{error.message} </h3>
    </div>
);

export default Error;
