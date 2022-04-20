import React from 'react';
import ModalSubmit from '../ModalSubmit/ModalSubmit';




const TextArea = (props) => {
    
    const {content, table, btnUpdate, btnAdd, btnDelete, id} = props;

    return (
        <div>
            <ModalSubmit 
            onOk={btnUpdate} 
            inputID = "name" 
            areaID ="country" 
            btnAdd={btnAdd} 
            btnDelete={btnDelete} 
            id={id}
            contentDel={content}
            tableDel={table}
            />
            <h1>table</h1>
            <div>{content}</div>
        </div>
    );
};

export default TextArea;