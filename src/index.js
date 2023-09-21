import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Menu</h1>
    <App menutype="อาหารคาว" menuname="กระเพรา" img="https://i.pinimg.com/564x/3c/6a/da/3c6adac19fc7b8854f1950550006cdae.jpg"/>
    <App menutype="ของหวาน" menuname="ชาไทย" img="https://i.pinimg.com/564x/13/04/1a/13041a8337d2ed322e8dc19a37e97d7e.jpg"/>
  </React.StrictMode>
);
