 
import   { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "./../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect( () =>{
      window.scrollTo(0,0);
    },[location])

    const controlNav = () =>{
      if(window.scrollY > 200) {
        if(window.scrollY > lastScrollY && !mobileMenu){
          setShow("hide");
        }
        else{
          setShow("show")
        }

         
      }
      else{
        setShow("top");
      }
      setLastScrollY(window.scrollY);

    }
 
    useEffect(() =>{
      window.addEventListener("scroll",controlNav)
      return () => {
        window.removeEventListener("scroll",controlNav)
      }
    },[lastScrollY])
 
    const openSearch = () =>{
      setMobileMenu(false);
      setShowSearch(true);
    }

    const openMobileMenu = () =>{
      setMobileMenu(true);
      setShowSearch(false);
    }

    const searchQueryHandler = (e)=>{
      if(e.key === "Enter" && query.length > 0)
      {
          navigate(`/search/${query}`);   
          setTimeout( () => {
            setShowSearch(false);
          },1000)
      }
  }

  const navigationhandle =(i)=>{
     if(i==="tv")
     {
      navigate("/explore/tv");
     }
     else 
     {
      navigate('/explore/movie');


     }

     setMobileMenu(false);
  }


  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>  
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt=""></img>
        </div>
        <ul className="menu-items">
          <li className="menu-item" onClick={() =>  navigationhandle("movie")} >Movies</li>
          <li className="menu-item" onClick={() => navigationhandle("tv")}>TV shows</li>
          <li className="menu-item">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch}/>
          {
            mobileMenu?( <VscChromeClose  onClick={()=>{
              setMobileMenu(false);
            }}/>):( <SlMenu onClick={openMobileMenu}/>)
          }
          {/* <SlMenu/>
          <VscChromeClose/> */}
        </div>
      </ContentWrapper>
      {showSearch &&  ( <div className="searchBar">
          <ContentWrapper>
          <div className="searchInput">
                         <input
                             type="text"
                             placeholder='Search for your Kind'
                             onKeyUp={searchQueryHandler} 
                             onChange={(e)=>{setQuery(e.target.value)}}
                         />
                          <VscChromeClose  onClick={()=>{
               setShowSearch(false);
             }}/>
                     </div>
                 
          </ContentWrapper>
       </div>)}
      
    </header>
    
  )
}

export default Header