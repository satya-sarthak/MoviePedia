import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTab/SwitchTab"
import { useState } from "react"
import useFetch from "./../../../hook/useFetch";
import Carousel from "../../../components/carousel/Carousel";

 

const Trending = () => {

    const [endpoint ,setEndpoint] = useState("day");

    const{data,loading} = useFetch(`/trending/all/${endpoint}`);

    const onTabChange = (tab) =>{
        setEndpoint( tab === "Day" ? "day" : "week");

    }
  return (
    
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading}/>
    
     
</div>
    
    
  )
}

export default Trending