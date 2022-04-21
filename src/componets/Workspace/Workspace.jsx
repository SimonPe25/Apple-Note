import React, { useContext } from 'react';
import { Context } from '../../context';
import { Row, Col } from 'antd';
import './Workspace.scss';
import TableList from '../TableList/TableList';
import Clocks from '../Clock/Clocks';
import TextArea from '../TextArea/TextArea';
import { Routes, Route} from "react-router-dom";




const Workspace = () => {

    const { dBList } = useContext(Context)
    


    return (
        <Row >
            <Col flex="167px" className="left-container">
                <TableList />
            </Col>
            <Col flex="auto" className="right-container">
                <div className="right-container__clock"><Clocks /></div>
                <div className="right-container__area">
                    
                    <Routes>
                        <Route path='/' element={<TextArea value="No added text" />} />
                        <Route path='/Create/note' element={<TextArea value="No added text" />} />
                        {dBList.map(card =>
                            <Route
                                path={`/:${card.id}`}
                                element={<TextArea
                                    content={card.country}
                                    id={card.id}
                                    table={card.name}
                                />}
                                key={card.id}
                            >
                            </Route>
                        )}
                        <Route path='*' element={<TextArea value="No added text" />} />
                    </Routes>
                </div>
            </Col>
        </Row>
    );
};

export default Workspace;