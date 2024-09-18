"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import paintingdenting from '../assets/image/projects_img/entryhouse.jpg'

const Project_card = ({ project }) => {
  // const img='https://drive.google.com/uc?export=view&id=14XnT0Hi92zXAXSsc8kjpXyKTod_Xuyh7'
  console.log("imaeg",project.image)
  return (
    <div className='col-md-6 mt-lg-4 my-4 col-11'>
      <div className=' white_shadow rounded-2 p-0'>
        <div className='w-100 p-0 m-0'>
          <Image src={project.image} layout="responsive" alt="Image" className='img-fluid p-0 m-0'  width={1248} height={650}></Image>
        </div>
        <div className='w-100 text-white p-lg-3 p-2'>
          <p className='title_md mb-0 mb-lg-3'>{project.title} - {project.sub_title}</p>
          <p className='title_sm m-0'>{project.description}</p>
        </div>
        <button className='px-4 py-2 bg-primary rounded-2 border-0 m-lg-3 m-1 text-white' onClick={() => window.open(`${project.live_link}`, '_blank')}>View Deployed Project</button>
      </div>
    </div>
  )
}
export default function Projects() {
  const [projects, setProjects] = useState(
    [
      {
        _id: 1,
        title: "PaintingDenting",
        sub_title: "A perfect place for all Interior work",
        description: "PaintingDenting made using Reactjs and Bootstrap for Showcasing Contractor Excellent Works",
        image: paintingdenting,
        live_link: "paintingdentingfrontend.onrender.com"
      },{
        _id: 2,
        title: "PaintingDenting",
        sub_title: "A perfect place for all Interior work",
        description: "PaintingDenting made using Reactjs and Bootstrap for Showcasing Contractor Excellent Works",
        image: paintingdenting,
        live_link: "paintingdentingfrontend.onrender.com"
      },{
        _id: 3,
        title: "PaintingDenting",
        sub_title: "A perfect place for all Interior work",
        description: "PaintingDenting made using Reactjs and Bootstrap for Showcasing Contractor Excellent Works",
        image: paintingdenting,
        live_link: "paintingdentingfrontend.onrender.com"
      },
    ]
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/addproject');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await response.json();
        console.log(result[0])
        setProjects(result);
      } catch (error) {
        //setError(error.message);
      } finally {
        //setLoading(false);
      }
    };

    fetchData();
  }, []);
  // const projects = [
  //   {
  //     id: 1,
  //     title: "PaintingDenting",
  //     sub_title: "A perfect place for all Interior work",
  //     description: "PaintingDenting made using Reactjs and Bootstrap for Showcasing Contractor Excellent Works",
  //     image: paintingdenting,
  //     url: "paintingdentingfrontend.onrender.com"
  //   },
  //   {
  //     id: 2,
  //     title: "PaintingDenting",
  //     sub_title: "A perfect place for all Interior work",
  //     description: "PaintingDenting made using Reactjs and Bootstrap for Showcasing Contractor Excellent Works",
  //     image: paintingdenting,
  //     url: "paintingdentingfrontend.onrender.com"
  //   },
  //   {
  //     id: 3,
  //     title: "PaintingDenting",
  //     sub_title: "A perfect place for all Interior work",
  //     description: "PaintingDenting made using Reactjs and Bootstrap for Showcasing Contractor Excellent Works",
  //     image: paintingdenting,
  //     url: "paintingdentingfrontend.onrender.com"
  //   },
  // ]

  return (
    <div className='container mt-4' id='projects'>
      <p className='footer_text fs-2 z' data-aos="flip-up">Projects</p>
      <div className='row flex-nowrap flex-md-wrap overflow-y-hidden'>
        {projects.map((project) => (
          <Project_card key={project._id} project={project} />
        ))}
        {/* <div className='col-6 mt-4'>
          <div className=' white_shadow rounded-2 p-0'>
            <div className='w-100 p-0 m-0'>
              <Image src={paintingdenting} alt="Image" className='img-fluid p-0 m-0'></Image>
            </div>
            <div className='w-100 text-white p-3'>
              <p className='title_md'>PaintingDenting - A perfect place for all Interior work</p>
              <p className='title_sm m-0'>PaintingDenting made using Reactjs and Bootstrap for Showcasing Contractor Excellent Works</p>
            </div>
            <button className='px-4 py-2 bg-primary rounded-2 border-0 m-3 text-white'>View Deployed Project</button>
          </div>
        </div> */}

      </div>
    </div>
  )
}
