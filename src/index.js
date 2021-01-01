import React from 'react';
import ReactDOM from 'react-dom';
import { SliderContainer } from './component';
import './index.css';
import data from './data/profileList.json';

ReactDOM.render(
  <React.StrictMode>
    <SliderContainer data={data.inputs} />
  </React.StrictMode>,
  document.getElementById('root')
);
