import React from 'react';
import "../../app/FacultadDetallada/fac-detallada.css";

const ResultsTable = () => {
    const data = Array(5).fill(["L(50)", "5to", "15"]);

    return (
        <table className="results-table border-separate border-spacing-x-5">
            <thead>
            <tr>
                <th>Edición</th>
                <th>Lugar <br/> obtenido</th>
                <th>Medallas <br/> obtenidas</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {row.map((cell, i) => (
                        <td className="text-center">{cell}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ResultsTable;