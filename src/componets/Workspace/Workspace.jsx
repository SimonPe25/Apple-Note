import React from 'react';
import { Row, Col } from 'antd';
import NoteList from '../NoteList/NoteList';
import Sidebar from '../Sidebar/Sidebar';

const Workspace = () => {
    return (
        <Row>
        <Col span={18} push={6}>
        <Sidebar/>
        </Col>
        <Col span={6} pull={18}>
        <NoteList/>
        </Col>
    </Row>
    );
};

export default Workspace;