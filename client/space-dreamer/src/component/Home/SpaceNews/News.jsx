
import { useState,useEffect } from "react";
import axios from 'axios'
import SpaceCard from "./SpaceCard";
import '../../../../src/index.css'


const Spaceapi = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
    async function getNews() {
            try {
                setTimeout(function () {    
                }, 20000);
                const res = await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
                setNews(res.data);
            } catch (err) {
                console.log("Error fetching data");
            }
        }
        getNews()}, []);

    return (
        <div className="Space-container">
                {news.length === 0 ? (<img className="Loading_img" src={process.env.PUBLIC_URL + './menu-icon.png'} alt="Loading"/>):(<SpaceCard  news={news}/>)}         
                <h1>news</h1>
         </div>
    )
}


export default Spaceapi;