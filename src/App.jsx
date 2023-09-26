 
 import { useEffect } from "react"
 import { fectchdata} from "./utils/api"; 
 import { useSelector,  useDispatch } from 'react-redux';
 import { getApiConfig ,getGenres} from "./store/homeSlice";
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
  import Home from "./pages/Home/Home";
  import Details from "./pages/Details/Details";
  import Search from "./pages/searchResult/Search";
  import Explore from "./pages/explore/Explore";
  import Pagenotfound from "./pages/404/Pagenotfound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Text from "./pages/CastDetails/Text";


 




function App() {
  const dispatch=useDispatch();
 

  useEffect(()=>{
    fetchApiconfig();
    genresCall();
  }, []);
  const {url} = useSelector((state) => state.home);
  // console.log(url);
  const fetchApiconfig =()=>{
    fectchdata('/configuration')
    .then((res)=>{
     
      const url = {
        backdrop:res.images.secure_base_url+"original",
        poster:res.images.secure_base_url+"original",
        profile:res.images.secure_base_url+"original", 
      }

      dispatch(getApiConfig(url));
    })
  }


  const genresCall = async () =>{
    let promises = []
    let endPoint = ["tv","movie"]
    let allGenres = {}

    endPoint.forEach((url) => {
      promises.push(fectchdata(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item))
    });

    dispatch(getGenres(allGenres));
  }

  return (
     <BrowserRouter>
     <Header/>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/:mediaType/:id" element={<Details/>} />
         <Route path="/search/:query" element={<Search/>}/>
         <Route path="/explore/:mediaType" element={<Explore/>}  />
         <Route path="/person/:personid" element={<Text/>} />
         <Route path="*" element={<Pagenotfound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
  )
}

export default App
