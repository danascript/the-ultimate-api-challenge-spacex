import React from 'react';
// style
import './style.scss';

const InfoTable = ({ title, data }) => (
    <div className="info-table col-12 col-md-8 col-lg-7 d-flex flex-column justify-content-center">
        <h5>{title}</h5>
        <h1>OVERVIEW</h1>

        <table className="table">
            <tbody>
                {data.map(row => (
                    <tr key={row.title}>
                        <td>{row.title}</td>
                        <td> {row.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default InfoTable;
