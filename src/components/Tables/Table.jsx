import React from 'react';
import TableRow from "../Tables/TableRow";
import TableHead from "../Tables/TableHead";

const Table = ({ theadData, tbodyData, customStyles }) => {
    return (
        <table className={customStyles}>
            <thead>
                <tr>
                    {theadData.map((i) => {
                        return <TableHead key={i} item={i} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items}/>;
                })}
            </tbody>
        </table>
    );
};

export default Table;