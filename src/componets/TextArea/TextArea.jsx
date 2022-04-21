import React from 'react';
import ModalSubmit from '../ModalSubmit/ModalSubmit';
import Search from '../Search/Search';




const TextArea = (props) => {
    
    const {content, table, btnUpdate, btnAdd, btnDelete, id} = props;

    const h1Style = {
        color: '#3c2f56',
        margin: '10px'
      };
    return (
        <div>
            <Search/>
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
            <h1 style={h1Style}>{table}</h1>
            <div style={h1Style}>{content}</div>
        </div>
    );
};

export default TextArea;