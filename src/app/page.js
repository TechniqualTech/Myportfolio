"use client"
import Welcome from "@/Component/welcome";
import Projects from "@/Component/projects";
import About from "@/Component/about";
import Contact from "@/Component/contact";
import Quotes from "@/Component/quotes";

//aos library
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


//contexts
import { useContext ,useEffect} from 'react';
import { CurrentContext } from '../context/currentContext'

export default function Home() {
  //contexts
  const { current, setCurrent } = useContext(CurrentContext);

  //aos init
  useEffect(() => {
    AOS.init();
  }, []);
  
  //prop current section  
  useEffect(() => {
    if (current) {
      console.log('eb', current)
      const sectionElement = document.getElementById(current);
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setCurrent(null)
    }
  }, [current]);
  const section = {
    welcome: <Welcome />,
    project: <Projects />,
    about: <About />,
    contact: <Contact />
  }
  return (
    <>
      <div className="container-fluid py-5">
        {section.welcome}
        <Quotes/>
        {section.project}
        {section.about}
        {section.contact}
        {/* <Welcome/>
        <Projects/>
        <About/>
        <Contact/> */}
      </div>
    </>);
}
