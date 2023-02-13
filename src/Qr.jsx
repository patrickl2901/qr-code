import React from 'react';
import qr from './img/image-qr-code.png';
import './Qr.css';

function Qr() {
  return (
    <div className='qr'>
        <img src={qr} alt='qr' className='qr-img' />
        <h1 className='title'>Improve your front-end skills by building projects</h1>
        <p className='text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default Qr;