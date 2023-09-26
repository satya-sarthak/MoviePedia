 import './style.scss';
 import {useParams} from 'react-router-dom'
import useFetch from './../../hook/useFetch';
import DetailsBanner from './DetailsBanner/DetailsBanner';
import Cast from './Cast/Cast';
import VideosSection from './videosSection/VideosSection';
import Similar from './crousel/Similar';
import Recommendation from './crousel/Recomended';
  

const Details = () => {
  const {mediaType,id} = useParams();
  const {data,loading}= useFetch(`/${mediaType}/${id}/videos`);
 
  const {data: credits,loading: creditsLoading}= useFetch(`/${mediaType}/${id}/credits`);
   
  

  
  return (
    <>
     <DetailsBanner crew={credits?.crew} video={data?.results}  />
     <Cast data={credits?.cast}  loading={creditsLoading}/>
     <VideosSection data={data} loading={loading}/>
     <Similar mediaType={mediaType} id={id} />
     <Recommendation mediaType={mediaType} id={id} />
     </>
  )
}

export default Details