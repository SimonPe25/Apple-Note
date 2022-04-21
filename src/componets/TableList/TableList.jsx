import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Context } from '../../context';
import InputSearch from '../InputSearch/InputSearch';
import PostFilter from '../PostFilter/PostFilter';
import Table from '../Table/Table';
import './TableList.scss';

const TableList = () => {

    const { dBList } = useContext(Context)
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('card') || '';

    return (
        <>
            <Table />
            <ul>
                {dBList
                    .filter(card => card.name.includes(postQuery))
                    .map(card =>
                        <Table
                            table={card.name.length > 15 ?
                                `${card.name.substr(0, 15)}...` :
                                card.name}
                            id={card.id}
                            key={card.id}
                            content={card.country.length > 12 ?
                                `${card.country.substr(0, 12)}...` :
                                card.country}
                        >
                      </Table>)}
            </ul>
        </>
    )
};

export default TableList;