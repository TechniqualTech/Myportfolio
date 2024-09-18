import React from 'react'

export default function About() {
  return (
    <div className='container my-5' id='about'>
      <p className='footer_text fs-2 z' data-aos="flip-up">About</p>
      <div className='text-white'>
        <p className='fs-4 font_res2'>I'm Vicky Gupta, a passionate MERN stack developer with a flair for building dynamic and interactive web applications. My expertiselies in the following technologies:</p>
        <ul className='fs-5 font_res'>
          <li>React.js: I create responsive anduser-friendly interfaces using React, ensuring seamless user experiences.</li>
          <li>MongoDB: I handle data storage and retrieval efficiently,leveraging MongoDB for robust backend development.</li>
          <li>Express.js: I build RESTful APIs and manage server-side logic with Express.</li>
          <li>Node.js: I'm proficient in server-side scripting using Node.js, ensuring smooth communication between the client and server.</li>
          <li>Next.js: Next.js is a popular React framework for building fast, scalable, and server-rendered applications with ease and efficiency always.</li>
          <li>Bootsrap: Bootstrap is a popular front-end framework for building responsive, mobile-first, and customizable web applications quickly and efficiently.</li>
          <li>Sass/Scss: SASS/SCSS is a CSS preprocessor for efficient, modular, and customizable styling with variables and nesting.</li>
        </ul>
        <p className='fs-4 font_res2'>
        Whether it's crafting pixel-perfect UI components or optimizing backend performance, I'm committed to delivering clean, code that adheres to industry standards. Let's collaborate and bring your ideas to life! Feel free to connect with me on LinkedIn or explore my projects on GitHub. You can also reach out via email at <span className='text-danger'>  vickyg19052002@gmail.com </span>. Looking forward to creating amazing web experiences together!
        </p>
      </div>
    </div>
  )
}
