"use client"
import React, { useEffect, useState } from 'react'
import '../css/entry.css'
const Quotes_card = ({Quote }) => {
    return (
        <div className={`col-12 text-white white_shadow rounded-4 p-lg-4 px-4 py-0 m-1 d-flex flex-column justify-content-center ${false? 'animate-from-right' : ''}`}>
            <p className='text-start'>{Quote.quote}</p>
            <p className='text-end fst-italic'>............{Quote.author}</p>
        </div>
    )
}

export default function Quotes() {
    const [quotes, setQuotes] = useState([{
        id: 1,
        quote: "Happiness is the State of Mind.",
        author: "Vicky Gupta"
    }])

    const [divs, setDivs] = useState(quotes);

    useEffect(() => {
        async function get_quote() {
            let data = await fetch('https://dummyjson.com/quotes');
            let quote_data = await data.json()
            setQuotes(quote_data.quotes)
            setDivs(quote_data.quotes)
            console.log(quotes)
        }

        get_quote()
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDivs((prevDivs) => {
                const newDivs = [...prevDivs];
                newDivs.push(newDivs.shift());
                return newDivs;
            });
        }, 5000); // every 2 seconds
        return () => clearInterval(intervalId);
    },[quotes])
    // const quotes = [
    //     {
    //         id: 1,
    //         quote: "It is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that m qakes happiness.",
    //         author: "Vicky Gupta"
    //     },
    //     {
    //         id: 2,
    //         quote: "asdfasdfadfIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that m qakes happiness.",
    //         author: "Vicky Gupta"
    //     },
    //     {
    //         id: 3,
    //         quote: "111111111111111It is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that m qakes happiness.",
    //         author: "Vicky Gupta"
    //     }
    // ]
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-4'>
                    <p className='footer_text fs-2 z m-0' data-aos="flip-up">Make's Your Day...</p>
                    <p className='title_md text-white'>driving toward's your success.</p>
                </div>
                <div className='col-lg-8'>
                    <div className='auto_carousal m-1 p-2 col-12 row flex-nowrap overflow-hidden'>
                        {divs.map((quote) => (
                            <Quotes_card key={quote.id} Quote={quote} />
                        ))}
                        {/* <div className='col-12 text-white white_shadow rounded-4 p-4'>
                        <p className='text-start'>It is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that mIt is not how much we have, but how much we enjoy, that m qakes happiness.</p>
                        <p  className='text-end fst-italic'>............Vicky gupta</p>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
