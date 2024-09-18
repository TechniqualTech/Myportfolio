import React from 'react'

import Image from 'next/image';
import email from '../assets/icon/icons8-email-26.png'
import linkedin from '../assets/icon/icons8-linkedin-30.png'
import github from '../assets/icon/icons8-github-30.png'
import download from '../assets/icon/icons8-file-download-48.png'

export default function Contact() {
  return (
    <div className='container my-5' id='contact'>
      <p className='footer_text fs-2 z' data-aos="flip-up">Contact Me:</p>
      <div className='text-white'>
        <p className='fs-3'>Find my contact details below </p>
        <div className='m-1 fs-5 font_res'>
          <p className='lh_sm'><a className='text-decoration-none text-white' href=' https://mail.google.com/mail/u/0/#inbox' target='_blank'><span className='social_logo me-2'> <Image className='img-fluid' src={email} alt='logo'></Image> </span>Email:- vickyg19052002@gmail.com</a></p>
          <p className='lh_sm'><a className='text-decoration-none text-white' href=' https://www.linkedin.com/in/vicky-gupta-334400230/' target='_blank'><span className='social_logo me-2'> <Image className='img-fluid' src={linkedin} alt='logo'></Image> </span>Linkedin :- https://www.linkedin.com/in/vicky-gupta-334400230</a></p>
          <p className='lh_sm'><a className='text-decoration-none text-white' href=' https://github.com/Techniqual-Tech/' target='_blank'><span className='social_logo me-2'> <Image className='img-fluid' src={github} alt='logo'></Image> </span>Github :-  https://github.com/Techniqual-Tech</a></p>
          <p className='lh_sm'><a className='text-decoration-none text-white' href=' src/assets/pdf/vicky27_8_24.pdf' download="vicky27_8_24.pdf" ><span className='social_logo me-2'> <Image className='img-fluid' src={download} alt='logo'></Image> </span>Resume :- VickyResume</a></p>
        </div>
      </div>
    </div>
  )
}
