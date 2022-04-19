import React, {useContext} from 'react';
import {Context} from '../../context'
import Sidebar from '../Sidebar/Sidebar';


const ListItem = () => {


    const {posts, deletePost} = useContext(Context)


    return (
        <ul>
            {posts.map(item =>
            {<Sidebar 
                title={item.title}
            />}
            )}
        </ul>
    );
};

export default ListItem;