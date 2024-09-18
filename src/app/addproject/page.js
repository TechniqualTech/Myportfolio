"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import trash from '../../assets/icon/icons8-delete-30.png'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
//contexts
import { useContext } from 'react';
import { AuthContext } from '../../context/currentContext'



export default function Page() {
    //routing
    const router = useRouter();

    //context object
    const { login, setLogin } = useContext(AuthContext);
    console.log("login status ",login)
    useEffect(()=>{
        if(login!=true){
            router.push('/admin')
        }
    },[])
    const [delvisible, setdelVisible] = useState(false)

    const [formData, setFormData] = useState({
        image: '',
        title: '',
        sub_title: '',
        description: '',
        live_link: ''
    });

    const [del_form, setdDel_form] = useState({
        delete: ''
    })

    // Function to toggle the input field visibility
    const toggleInput = () => {
        setdelVisible(!delvisible);
    };
    const delete_project = (e) => {
        e.preventDefault()
        toggleInput()
    }

    const Delete = async (e) => {
        e.preventDefault()
        console.log(del_form)
        try {
            const response = await fetch('api/addproject', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(del_form),
            });

            const result = await response.json();
            console.log("delteresult",result)
            if (result.message=="Record deleted successfully") {
                //reset
                setdDel_form({
                    delete: ''
                })
                toast.success("Record Deleted Successfully!")

            } else {
                toast.error("Record Not Found!")
                //reset
                setdDel_form({
                    delete: ''
                })
            }
        } catch (error) {
            //reset
            setdDel_form({
                delete: ''
            })
            toast.error("Error:",error.message)
            
        }
        setdelVisible(false)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data submitted1:', formData);


        try {
            const response = await fetch('api/addproject', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                //reset
                setFormData({
                    image: '',
                    title: '',
                    sub_title: '',
                    description: '',
                    live_link: ''
                })
                toast.success('Project Added Successfully!');
            } else {
                toast.error('Project Added Failed!');
                
            }
        } catch (error) {
            toast.error('Failed to submit form');
        }



    }
    const handleChange_del = (e) => {
        const { name, value } = e.target
        setdDel_form({
            ...del_form,
            [name]: value
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <div className='container-fluid py-5'>
            <div className='container'>
                <div className='col-lg-4 col-sm-8 col-12 rounded-4 border-1  p-4 m-lg-5 my-5 white_shadow'>
                    <form className='d-flex flex-column' onSubmit={handleSubmit}>
                        <label htmlFor="name" className='title_md text-white mt-2'>Choose Cover Image</label>
                        <input type='url' id="image" placeholder='https://...' name="image" onChange={handleChange} title='1248x650' value={formData.image} required className='rounded-3 border-0 mt-2'></input>

                        <label htmlFor="name" className='title_md text-white mt-2'>Title</label>
                        <input type='text' id="text_title" name="title" onChange={handleChange} title='1-word 20char' value={formData.title} required className='rounded-3 border-0 mt-2'></input>

                        <label htmlFor="name" className='title_md text-white mt-2'>Sub_Title</label>
                        <input type='text' id="text_subtitle" name="sub_title" onChange={handleChange} title='8-word 35char' value={formData.sub_title} required className='rounded-3 border-0 mt-2'></input>

                        <label htmlFor="name" className='title_md text-white mt-2'>Description</label>
                        <input type='text' id="text_description" name="description" onChange={handleChange} title='15word 80char' value={formData.description} required className='rounded-3 border-0 mt-2'></input>

                        <label htmlFor="name" className='title_md text-white mt-2'>Deployed Link</label>
                        <input type='url' id="text_link" placeholder='https://...' name="live_link" onChange={handleChange} title='live project' value={formData.live_link} required className='rounded-3 border-0 mt-2'></input>

                        <button type="submit" className='my-5 rounded-4 col-6 title_md mx-auto border-1 white_shadow bg-danger text-white'>Add Project</button>
                    </form>
                    {delvisible && (
                        <div className='white_shadow d-flex rounded-4'>
                            <form onSubmit={Delete} className='col-12'>
                                <input type="text" placeholder="Enter Project Name" id='delete' name='delete' title='delete project' onChange={handleChange_del} value={del_form.delete} className=' rounded-4 col-9' required />
                                <button type="submit" className='my-1 rounded-4 col-3 title_sm mx-auto border-1 white_shadow bg-danger text-white'>delete</button>
                            </form>
                        </div>
                    )}
                    <p className='lh_sm d-inline'><a className='text-decoration-none text-white' href='#' onClick={(e) => { delete_project(e) }}><span className='social_logo me-2'> <Image className='img-fluid' src={trash} alt='project Remove'></Image> </span></a></p>

                </div>
            </div>
        </div>
    )
}
