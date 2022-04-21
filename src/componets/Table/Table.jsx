import React from 'react';
import { clocktime } from '../Clock/clocktime.js';
import CustomLink from '../CustomLink/CustomLink.jsx';
import './Table.scss'

const Table = (props) => {
    const {table, id, content} = props

    Table.defaultProps = {
        table: "Новая заметка",
        content: "No additional text",
        url: "" 
    }
    
    return (
        <>
            <CustomLink  to={`/${id ? id : "Create/note"}`}  >
                <div className='table-create'>
                    <h1 className='table-create__table'>{table}</h1>
                    <div className='table-create__clock clock'>
                        <p className='clock__clock'>{clocktime()}</p>
                        <p className='clock__text'>{content}</p>
                    </div>
                </div>
            </CustomLink>
        </>
    );


};



export default Table;