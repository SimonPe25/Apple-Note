import React, { useState, useContext } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import './ModalSubmit.scss'
import { Context } from '../../context';
import ModalContent from '../ModalContent/ModalContent';

const ModalSubmit = (props) => {
  const { btnDelete, btnAdd, btnUpdate} = useContext(Context)
  const { inputID, areaID, id, contentDel, tableDel } = props
  const [isModalVisibleDel, setIsModalVisibleDel] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [theme, setTheme] = useState(null);
  const [table, setTable] = useState(null);
  const [content, setContent] = useState(null);
  const [stateInput, setstateInput] = useState("");
  const [stateArea, setStateArea]=useState(contentDel)
  const { TextArea } = Input;

//============== add function ============= 
 const chose = "Create new note";
  const showModalAdd = (ev) => {
    setTheme(chose)
    setTable("Create new table of contents")
    setContent("Please write text")
    setIsModalVisible(true);
    setIsModalVisible(true);
  };
  const handleOkAdd = (ev) => {
    btnAdd(ev)
    setIsModalVisible(false);
  };

//============== update function =============
  const showModalUpdate = () => {
    setTheme("Do you want to update this note?")
    setTable("Do you want to update table of contents?")
    setContent("Do you wont to update this text?")
    setIsModalVisible(true)
    setstateInput(tableDel)
    setStateArea(contentDel)
  }
  const handleOkUpdate = (ev) => {
    btnUpdate(ev)
    setIsModalVisible(false);
  };
  const onChangeInput = (e) => {
    setstateInput(e.target.value)
  };
  const onChangeArea = (e) => {
    setStateArea(e.target.value)
  };

//============== delete function ==============

const showModalDel = () => {
  setIsModalVisibleDel(true);
};

const handleOkDel = (ev) => {
  btnDelete(ev)
  setIsModalVisibleDel(false);
};
const handleCancelDel = () => {
  setIsModalVisibleDel(false);
};

//============== other =====================

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="btn-container">
        <Button size="small" onClick={showModalAdd} className="btnmodalleft" id="btnAdd">
          Create
        </Button>
        {id ?
        <>
        <Button size="small" onClick={showModalUpdate} id="btnUpdate">
          Edit
        </Button>
         <Button size="small" onClick={showModalDel} className="btnmodalright" id="btnDelete">
          Delete
        </Button>
        </> : null}
      </div>
      <Modal title={theme} visible={isModalVisible} onOk={(theme === chose) ? handleOkAdd : handleOkUpdate} onCancel={handleCancel}>
        <form name="noteForm" data-key={id}>
          <label htmlFor={inputID}>{table}</label>
          <Input 
          id={inputID} 
          placeholder="table" 
          allowClear onChange={onChangeInput}
          value={stateInput} 
          ></Input>
          <br />
          <br />
          <label htmlFor={areaID}>{content}</label>
          <TextArea 
          id={areaID} 
          placeholder="text" 
          allowClear onChange={onChangeArea} 
          value={stateArea}
          />
          
        </form>
      </Modal>
      <ModalContent
        content={contentDel}
        table={tableDel}
        showModal={showModalDel}
        handleOk={handleOkDel}
        handleCancel={handleCancelDel}
        isModalVisible={isModalVisibleDel}
        btnDelete={btnDelete}
        id={id}
      /> 
    </>
  );
};

export default ModalSubmit;