import React from 'react';

const List = (props) => {
    const {name, id} = props
    return (
        <li id={id}>
           {name}
        </li>
    );
};

export default List;