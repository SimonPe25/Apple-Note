import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Context } from '../../context';
import Table from '../Table/Table';
import './Sidebar.scss';

const Sidebar = () => {

    const { dBList } = useContext(Context)
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('card') || '';

    return (
        <>
            <Table/>
            <ul>
                {dBList
                    .filter(card => card.note.includes(postQuery))
                    .map(card =>
                        <Table
                            table={card.note.length > 15 ?
                                `${card.note.substr(0, 15)}...` :
                                card.note}
                            id={card.id}
                            key={card.id}
                            content={card.noteContent.length > 12 ?
                                `${card.noteContent.substr(0, 12)}...` :
                                card.noteContent}
                        >
                        </Table>)}
            </ul>
        </>
    )
};

export default Sidebar;