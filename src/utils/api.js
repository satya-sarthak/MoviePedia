import axios from "axios";
const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2M4ZjhkYTg2MDIxNTE4NTcyY2UyMmJkZmUyZWMyNCIsInN1YiI6IjY0NzJlNzZhYTE5OWE2MDBiZjI5ZGE1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4JUx9gMknhxVCqHFaiNeqRIMd_-GeeoBHKYbBGOq_Zk";


const headers ={
    Authorization: "bearer "+TMDB_TOKEN,
};

export const fectchdata = async(url,params) =>{
    try{

        const {data} = await axios.get(BASE_URL+url,{
            headers,
            params,
        })
        return data;

    }catch(e){
        console.log(e);
        return e;
    }
}