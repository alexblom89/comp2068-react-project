import React, { useMemo, useState, useEffect } from 'react';
import Header from '../shared/Header';
import axios from 'axios';

const Data = () => {
    const API = ''
    const [data, setData] = useState([]);
    const posts = useMemo(() => data, [data]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        axios.get(API)
             .then(resp => {
                 setData(resp.data);
             });
    }, []);

    const sort = event => {
        event.persist();
        const { name, type } = event.target.dataset;

        <TODO>
            Check if i can use this function.
        </TODO>
        let sorted;
    
        if (type === "int")
            sorted = data.sort((a, b) => Number(a[name]) - Number(b[name]));
        else
            sorted = data.sort((a, b) => {
        if (a[name].toLowerCase() < b[name].toLowerCase()) return -1;
        if (a[name].toLowerCase() > b[name].toLowerCase()) return 1;
        return 0;
        });

        if (order) {
        sorted = sorted.reverse();
        setOrder(false);
        } else {
        setOrder(true);
        }

        setData([...sorted]);
    };

    return (
        <>
            
        </>
    )
}