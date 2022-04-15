import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
//import 'antd/dist/antd.css';
import App from './App';
import 'antd/dist/antd.min.css'

const root = createRoot(document.getElementById('root'));

root.render(
     <App />
  );

