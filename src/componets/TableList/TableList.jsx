import React, { useContext } from 'react';
import { Context } from '../../context';
import Table from '../Table/Table';
import './TableList.scss';

const TableList = () => {

    const { dBList } = useContext(Context)


    return (
        <>
           <Table /> 
           <ul>
           {dBList.map(card =>
                    <Table
                        table={card.name}
                        id={card.id}
                        key={card.id}
                        content={card.country.length > 8 ? 
                            `${card.country.substr(0, 8)}...` :
                             card.country}                     
                    >
                    </Table>)}
           </ul>
        </>

    )
};

export default TableList;