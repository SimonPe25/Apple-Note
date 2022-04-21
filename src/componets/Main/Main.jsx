import React, { useState } from 'react';
import Header from '../Header/Header';
import Workspase from '../Workspace/Workspace';
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
           <Workspase/>
        </div>    
        <div className="overlay"></div>
      </div>
      </div>
  )
};

export default Main;