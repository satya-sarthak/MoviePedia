import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTab/SwitchTab"
import { useState } from "react"
import useFetch from "./../../../hook/useFetch";
import Carousel from "../../../components/carousel/Carousel";

 

const TopRated = () => {

    const [endpoint ,setEndpoint] = useState("movie");

    const{data,loading} = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) =>{
        setEndpoint( tab === "Movies" ? "movie" : "tv");

    }
  return (
    
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Max Rated</span>
        <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    
     
</div>
    
    
  )
}

export default TopRated