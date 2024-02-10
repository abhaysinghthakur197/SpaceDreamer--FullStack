import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Card, Row, Carousel } from 'react-bootstrap';
import ArticleCard from './ArticleCard';

const UseraddNews = () => {

    const [alldata, setalldata] = useState([])

    useEffect(() => {
        fetchDate();
    }, [])

    const fetchDate = async () => {
        try {
            await axios.get('http://localhost:8080/api/').then(response => {
                console.log("all articles by users", response)
                setalldata(response.data)
                // console.log(response.data)

            })
        } catch (e) {
            console.log("error in useraddnews api call", e)
        }
    }

    console.log(alldata)
    return (
        <div className='h-100'>
            <div className='my-5 mx-5 '>
                <h2 className='text-center text-white font-family-Helvetica, Arial, sans-serif'> News By SP<span className='text-danger'>A</span>CE <span className='text-warning'>DREAMER'<span className='text-white'>s</span></span></h2>
            </div>
            {alldata.length === 0 ? (<img className="Loading_img" src={process.env.PUBLIC_URL + './Logo.png'} alt="Loading"/>):(<ArticleCard  allArticle={alldata}/>)}         
          
        </div>


    )
}

export default UseraddNews;