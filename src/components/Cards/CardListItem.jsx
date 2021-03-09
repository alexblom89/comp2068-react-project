import React from 'react';

const CardListItem = ({ label, props }) => {
    return (
        <li className="list-group-item"><strong>{label}</strong>{props}</li>
    );
};

export default CardListItem;