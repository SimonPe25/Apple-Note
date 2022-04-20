import React from 'react';
import { Modal } from 'antd';

const ModalContext = (props) => {
 const {handleOk, handleCancel, isModalVisible, content, table, id} = props

 console.log("id", id);

    return (
        <>
            <Modal title="Do you want to delete note?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <form name="whiskeyFormDel" data-key-del={id}>
                <h1>{table}</h1>
                <p>{content}</p>
                </form>
            </Modal>
        </>
    );
};

export default ModalContext;