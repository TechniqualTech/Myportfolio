import React from 'react'
import Image from 'next/image';
import namelogo from '../../../public/icons8-v-64.png';
import email from '../../assets/icon/icons8-email-26.png'
import linkedin from '../../assets/icon/icons8-linkedin-30.png'
import github from '../../assets/icon/icons8-github-30.png'
import download from '../../assets/icon/icons8-file-download-48.png'


export default function Footer() {
  return (
    <div className='container-fluid tran_blur top_border_shadow'>
      <div className='container d-flex flex-column flex-md-row'>
        <div className='col-12 col-md-6 d-flex justify-content-start align-items-center text-danger my-4 '>
          <div className="containers mx-md-5 me-4">
            <div className="cube">
              <div className="s1 d-flex justify-content-center align-items-center rounded"><a className='m-2 float-start'><Image src={namelogo} alt='logo' className='logo' /></a></div>
              <div className="s2 d-flex justify-content-center align-items-center rounded"><a className='m-2 float-start'><Image src={namelogo} alt='logo' className='logo' /></a></div>
              <div className="s3 d-flex justify-content-center align-items-center rounded"><a className='m-2 float-start'><Image src={namelogo} alt='logo' className='logo' /></a></div>
              <div className="s4 d-flex justify-content-center align-items-center rounded"><a className='m-2 float-start'><Image src={namelogo} alt='logo' className='logo' /></a></div>
              <div className="s5 d-flex justify-content-center align-items-center rounded"><a className='m-2 float-start'><Image src={namelogo} alt='logo' className='logo' /></a></div>
              <div className="s6 d-flex justify-content-center align-items-center rounded"><a className='m-2 float-start'><Image src={namelogo} alt='logo' className='logo' /></a></div>
            </div>
          </div>
          <p className=' title_lg footer_text m-0 px-1'>Mr. Vicky Gupta</p>
        </div>
        <div className='col-12 col-md-6 d-flex flex-row my-4'>
          <div className='col-6'>
            <p className='title_lg footer_text'>Projects:</p>
            <div className='m-1'>
              <p className='lh_sm '><a className='text-decoration-none text-white' href='http://paintingdentingfrontend.onrender.com' target='_blank'>PaintingDenting</a></p>
              <p className='lh_sm'><a className='text-decoration-none text-white' href=''>Inshot News</a></p>
              <p className='lh_sm'><a className='text-decoration-none text-white' href=''>Group Chat</a></p>
              <p className='lh_sm'><a className='text-decoration-none text-white' href=''>Attendance Management</a></p>
            </div>
          </div>
          <div className='col-6'>
            <p className='title_lg footer_text'>Links:</p>
            <div className='m-1'>
              <p className='lh_sm'><a className='text-decoration-none text-white' href=''><span className='social_logo me-2'> <Image className='img-fluid' src={email} alt='logo'></Image> </span>Email</a></p>
              <p className='lh_sm'><a className='text-decoration-none text-white' href=''><span className='social_logo me-2'> <Image className='img-fluid' src={linkedin} alt='logo'></Image> </span>Linkedin</a></p>
              <p className='lh_sm'><a className='text-decoration-none text-white' href=''><span className='social_logo me-2'> <Image className='img-fluid' src={github} alt='logo'></Image> </span>Github</a></p>
              <p className='lh_sm'><a className='text-decoration-none text-white' href=''><span className='social_logo me-2'> <Image className='img-fluid' src={download} alt='logo'></Image> </span>Resume</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
