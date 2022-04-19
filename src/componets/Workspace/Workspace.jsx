import React, { useContext, useNavigate, useState } from 'react';
import { Context } from '../../context';
import { Row, Col } from 'antd';
import './Workspace.scss';
import TableList from '../TableList/TableList';
import Clocks from '../Clock/Clocks';
import TextArea from '../TextArea/TextArea';
import { Routes, Route, Navigate } from "react-router-dom";
import Notfoundpage from '../Notfoundpage/Notfoundpage';
import { Modal, Button } from 'antd';


const Workspace = () => {

    const { dBList, logik, wList, btnAdd, btnUpdate, btnDelete } = useContext(Context)


    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (ev) => {
        btnAdd(ev)
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        
    };



    return (
        <Row >
            <Col flex="167px" className="left-container">
                <TableList />
            </Col>
            <Col flex="auto" className="right-container">
                <div className="right-container__clock"><Clocks /></div>
                <div>
                    <Button type="primary" onClick={showModal}>
                        Open Modal
                    </Button>
                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <form name="whiskeyForm" >
                <fieldset>
                    <p>
                        <label htmlFor="name">Whiskey: </label>
                        <input
                            type="text"
                            id="name"
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="country">Country of Origin: </label>
                        <input
                            type="area"
                            id="country"
                            required
                        />
                    </p>
                    <p>
                        {/* <button id="btnAdd" onClick={btnAdd}>Add Whiskey</button> */}
                        <button id="btnUpdate" onClick={btnUpdate}>Update Whiskey</button>
                        <button id="btnDelete" onClick={btnDelete}>Delete Whiskey</button>
                    </p>
                </fieldset>
            </form>
                    </Modal>
                </div>
                <div className="right-container__area">

                    <Routes>
                        <Route path='/' element={<TextArea value="No added text" />} />
                        <Route path='/Create/note' element={<TextArea value="No added text" />} />

                        {dBList.map(card =>
                            <Route
                                path={`/:${card.id}`}
                                element={<TextArea value={card.country} />}
                                key={card.id}
                            >
                            </Route>
                        )}
                        <Route path='*' element={<Notfoundpage />} />
                    </Routes>

                </div>
            </Col>
        </Row>
    );
};

export default Workspace;