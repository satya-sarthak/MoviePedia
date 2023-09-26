import { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import useFetch from '../../../hook/useFetch';
import {useSelector} from "react-redux"

import './style.scss'
import Img from '../../../components/lazyLoadingimg/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
const HeroBanner = () => {
    const [background,setBackground]=useState("");
    const [query,setQuery]=useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state) => state.home)

    const {data,loading} = useFetch("/movie/upcoming");


    useEffect (()=>{
        const bg =url.backdrop +  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        console.log(bg);
        setBackground(bg);
         
    },[data])


    const searchQueryHandler = (e)=>{
        if(e.key === "Enter" && query.length > 0)
        {
            navigate(`/search/${query}`);   
        }
    }



  return (
        <div className="heroBanner">

           {!loading && <div className="backdrop-img">
                <Img src={background}/>
            </div>}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">
                        Welcome
                    </span>
                    <span className="subtitle">
                        Find the best movies,TV shows for you
                        Explore Now. 
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder='Search for your Kind'
                            onKeyUp={searchQueryHandler} 
                            onChange={(e)=>{setQuery(e.target.value)}}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
       
                
             
        </div>
  )
}

export default HeroBanner