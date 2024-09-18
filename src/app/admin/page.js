'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';


//contexts
import { useContext } from 'react';
import { AuthContext } from '../../context/currentContext'


export default function Page() {
    //context object
    const { login, setLogin } = useContext(AuthContext);
    //routing
    const router = useRouter();

    const [formData, setFormData] = useState({
        user_id: '',
        password: '',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission (client-side or server-side)
        console.log('Form data submitted:', formData);

        // Optionally send form data to an API route (server-side handling)
        const response = await fetch('/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json()
        console.log("server response", result)

        if (result.message === "Success") {
            toast.success("Login Successfully")
            setLogin(true)
            router.push('/addproject');
        } else if (result.message === "Failed") {
            toast.error('Wrong Credentail');
        }
        else {
            toast.error("Login Error")
        }


        setFormData({
            user_id: '',
            password: '',
        })
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className='container-fluid py-5'>
            <div className='container d-flex justify-content-start align-items-center' >
                <div className='col-lg-4 col-sm-8 col-12 rounded-4 border-1  p-4 m-lg-5 my-5 white_shadow'>
                    <form className='d-flex flex-column' onSubmit={handleSubmit}>
                        <label htmlFor="name" className='title_md text-white mt-2'>UserID</label>
                        <input type='text' id="user_id" name="user_id" onChange={handleChange} value={formData.user_id} required className='rounded-3 border-0 mt-2'></input>
                        <label htmlFor="name" className='title_md text-white mt-2'>Password</label>
                        <input type='password' id="password" name="password" onChange={handleChange} value={formData.password} required className='rounded-3 border-0 mt-2'></input>

                        <button type="submit" className='my-5 rounded-4 col-6 title_md mx-auto border-1 white_shadow bg-danger text-white'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
