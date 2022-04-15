import React, { useState } from 'react';
import GetContent from '../../api/GetContent';
import Header from '../Header/Header';
import Form2 from '../temp/Form2';
import Workspace from '../Workspace/Workspace';

import './main.scss';

const Main = () => {

  const [isOpenCreateNote, setIsOpenCreateNote] = useState(false);

  const isOpenModalNote = () =>{
    setIsOpenCreateNote(!isOpenCreateNote)
  }


  return (
    <div className='main__background-image'>
      <div className="main__modal-wrapper">
        <div className="main__modal-window">
          <Header isOpenModalNote={isOpenModalNote}/>
          <Workspace/>
          {isOpenCreateNote ? <Form2 /> : null} 
        </div>
        <GetContent/>
        
        <div className="overlay"></div>
      </div>

    </div>
  );
};

export default Main;