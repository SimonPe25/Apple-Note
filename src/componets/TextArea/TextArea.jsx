import React from 'react';
import ModalSubmit from '../ModalSubmit/ModalSubmit';
import ReactMarkdown from 'react-markdown';

const TextArea = (props) => {
  const esc = " ";
    const { content, table, btnUpdate, btnAdd, btnDelete, id } = props;
    const card = `# ${table}\n\n  ${esc + content}`;
  
    return (
        <div>
            <ModalSubmit
                onOk={btnUpdate}
                inputID="name"
                areaID="country"
                btnAdd={btnAdd}
                btnDelete={btnDelete}
                id={id}
                contentDel={content}
                tableDel={table}
            />
            <ReactMarkdown >{card}</ReactMarkdown>
        </div>
    );
};

export default TextArea;