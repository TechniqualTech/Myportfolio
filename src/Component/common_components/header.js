'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import '../../css/header_footer.css'
import namelogo from '../../../public/icons8-v-64.png';


//contexts
import { useContext } from 'react';
import { CurrentContext } from '../../context/currentContext'


export default function Header() {
  //routing
  const router = useRouter();

  //context object
  const { current, setCurrent } = useContext(CurrentContext);
  //setting current section
  const handleNavClick = (e, page, section) => {

    e.preventDefault();
    const path = window.location.pathname
    if (path !== '/') {
      router.push(page);
    }
    //console.log(current)
    setCurrent(section);
  };

  const handleClick = (e, page) => {
    e.preventDefault();
    router.push(page);
  };

  //nav active item
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActive = (index) => {
    setActiveIndex(index);
  };

  function hamburg(toggle) {
    const hamburg_container = document.querySelector('.hamburg_container');
    hamburg_container.classList.toggle(`hamburg_container_${toggle}`);

  }
  return (
    <div className='container-fluid black position-fixed bottom_border_shadow'>
      <div className='container text-white d-flex flex-row justify-content-between w-100'>
        <div className='d-flex justify-content-between'>
          <a className='m-2 float-start'><Image src={namelogo} alt='logo' className='logo' /></a>
          <a className='fw-bolder title text-decoration-none text-white m-2 mx-4'> Mr. Vicky Gupta</a>
        </div>

        <ul className='list-unstyled d-md-flex flex-row m-2 d-none '>
          <li className='p-2 ms-2 hov_pointer'><a href='#' className={`text-decoration-none ${activeIndex === 0 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleNavClick(e, '/', 'home'); handleActive(0) }}>Home</a></li>
          <li className='p-2 ms-2 hov_pointer'><a className={`text-decoration-none ${activeIndex === 1 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleNavClick(e, '/', 'projects'); handleActive(1) }}>Projects</a></li>
          <li className='p-2 ms-2 hov_pointer'><a className={`text-decoration-none ${activeIndex === 2 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleNavClick(e, '/', 'about'); handleActive(2) }}>About</a></li>
          <li className='p-2 ms-2 hov_pointer'><a className={`text-decoration-none ${activeIndex === 3 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleNavClick(e, '/', 'contact'); handleActive(3) }}>Contact Me</a></li>

        </ul>
        <button className='hamburg_menu d-md-none border-0 d-md-none' onClick={() => { hamburg('show') }}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className='hamburg_container position-absolute top-0 start-0 col-12 rounded mt-5 hamburg_container_hide black'>
          <ul className='list-unstyled d-flex flex-column  m-2'>
            <li className='p-2'><a className={`text-decoration-none ${activeIndex === 0 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleNavClick(e, '/', 'home'); handleActive(0) }}>Home</a></li>
            <li className='p-2'><a className={`text-decoration-none ${activeIndex === 1 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleNavClick(e, '/', 'projects'); handleActive(1) }}>Projects</a></li>
            <li className='p-2'><a className={`text-decoration-none ${activeIndex === 2 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleNavClick(e, '/', 'about'); handleActive(2) }}>About</a></li>
            <li className='p-2'><a className={`text-decoration-none ${activeIndex === 3 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleNavClick(e, '/', 'contact'); handleActive(3) }}>Contact Me</a></li>
            <li className='p-2'><a className={`text-decoration-none ${activeIndex === 4 ? 'text-danger' : 'text-white'} hover_red`} onClick={(e) => { handleClick(e, '/admin'); handleActive(4) }}>Admin</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
