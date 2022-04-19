import React from 'react';
import { NavLink } from 'react-router-dom';
import { clocktime } from '../Clock/clocktime.js';
import CustomLink from '../CustomLink/CustomLink.jsx';
import './Table.scss'

const Table = (props) => {
    
    

    const { onClick, table, text, color, url, id, className } = props

    Table.defaultProps = {
        table: "Новая заметка",
        text: "No additional text",
        url: "" 
    }
    

    return (
        <>
            <CustomLink  to={`/${id ? id : "Create/note"}`}  >
                <div className='table-create' onClick={() => console.log({ table })}>
                    <h1 className='table-create__table'>{table}</h1>
                    <div className='table-create__clock clock'>
                        <p className='clock__clock'>{clocktime()}</p>
                        <p className='clock__text'>{text}</p>
                    </div>
                </div>
            </CustomLink>
        </>
    );


};



export default Table;