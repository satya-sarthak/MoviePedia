import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTab/SwitchTab"
import { useState } from "react"
import useFetch from "./../../../hook/useFetch";
import Carousel from "../../../components/carousel/Carousel";

 

const KnownFor = ({personId}) => {

    const [endpoint ,setEndpoint] = useState("movie");

    const{data,loading} = useFetch(`/person/${personId}/${endpoint}_credits`);
    console.log(data);

    const onTabChange = (tab) =>{
        setEndpoint( tab === "Movies" ? "movie" : "tv");

    }
  return (
    
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Known For</span>
        <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
    </ContentWrapper>
    <Carousel data={data?.cast} loading={loading} endpoint={endpoint}/>
    
     
</div>
    
    
  )
}

export default KnownFor