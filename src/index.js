import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import Channel from './service/channel';


const youtube = new Youtube('AIzaSyDiK81Xz7PzVVBRXA7TiydSx8WQ2U6hULs');
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);


