'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import '../css/entry.css'
import rotatingwheel from '../assets/image/rotatewheel.png'

export default function Welcome() {
  const words = ["React.Js", "Next.Js", "Node.Js", "Bootstrap", "Express.Js", "MongoDB", "Scss/Sass"];
  const [wordIndex, setWordIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [output, setOutput] = useState('');

  //rotating div
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newRotation = scrollPosition * 0.1; // adjust the rotation speed
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // typing animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      const word = words[wordIndex];
      const characters = word.split("");

      if (characterIndex < characters.length) {
        setOutput(output + characters[characterIndex]);
        setCharacterIndex(characterIndex + 1);
      } else {
        setCharacterIndex(0);
        setOutput('');
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, 200); // adjust the speed as needed

    return () => clearInterval(intervalId);
  }, [wordIndex, characterIndex, output]);
  return (
    <div className='container' id='home'>
      <div className='row'>
        <div className='col-lg-7 py-5 my-5 order-lg-1 order-2'>
          <p className='fs-2 footer_text z' data-aos="flip-up">Mr. Vicky Gupta</p>
          <p className='fs-3 text-white m-0'>I am a Web Developer who works with</p>
          <span id="output" className='footer_text fs-2'>
            {output}
            <span className='text-white fs-2'>|</span> {/* Persistent cursor */}
          </span>
          <p className='fs-5 text-white font_res'>
            With a strong portfolio of projects showcasing my expertise, I possess a keen ability to tackle complex problems and craft dynamic, responsive web applications that deliver exceptional user experiences. Moreover, my proficiency in backend technologies like NodeJS and ExpressJS perfectly complements my frontend skills, enabling me to make significant contributions to full-stack development projects and drive successful outcomes.
          </p>
        </div>
        <div className='col-lg-5 d-flex align-items-top justify-content-end order-lg-2 order-1'>
          <div className='position-fixed  wheel_size' style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.2s linear',
          }}>
            <Image src={rotatingwheel} alt='rotation' className='img-fluid rotat' ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
