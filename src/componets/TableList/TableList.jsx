import React, { useContext } from 'react';
import { Context } from '../../context';
import Table from '../Table/Table';
import './TableList.scss';






const TableList = () => {

    const { dBList } = useContext(Context)

    const test = () => {
        console.log("Test");
    }


    return (
        <>
           <Table onClick={test}/>
           
           <ul>
           {dBList.map(card =>
                    <Table
                        table={card.name}
                        id={card.id}
                        key={card.id}
                        text={card.country}
                        
                    >
                    </Table>)}
           </ul>
        </>

    )
};

export default TableList;