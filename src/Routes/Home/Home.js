import React from 'react';
import MovieItem from '../../components/MovieItem/MovieItem.js'
import films from '../../films.js';
import cl from './Home.module.scss'
import {useInView} from 'react-intersection-observer';
import Myinput from '../../components/UI/MyInput/MyInput.js';
import MyTumbler from '../../components/UI/MyTumbler/MyTumbler.js';
import Search from '../../pages/Search/Search.js';

const fetchApi = (url)=>{
    let res;
    fetch(url).then(resp=>{
      if(resp.status == 200){
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE'
      }
      return resp.json()
    }).then((data)=>{
      res = data
      console.log(data)
    }
    ).catch((err)=>{
      console.log(err)
    })
    return res
  }
    function Home() {
  const [count,setCount] = React.useState(1)
  const [switcher,setSwitch] = React.useState(false);
  const [movies,setMovie] = React.useState([])

   const fetching = (url,page)=>{
    fetch(url+page).then(resp=>{
      if(resp.status == 200){
        resp.headers['Access-Control-Allow-Origin'] = '*';
        resp.headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE';
        resp.headers['Set-Cookie'] = 'cross-site-cookie=whatever';
        resp.headers['SameSite'] = 'None';
      }
      return resp.json()
    }).then((data)=>{
      console.log(data.data.movies)
      if(data){
      setMovie(prev=>prev.concat(data.data.movies))
      }
      
  })
  }
  const urlToMovies = `https://yts.mx/api/v2/list_movies.json?page=`;
  const memeFetch = React.useCallback(()=>{
    fetching(urlToMovies,count)
  },[urlToMovies,count])
  const [ref, inView] = useInView()
React.useEffect(()=>{
  if(inView){
    console.log('yeah')
    setCount(prev=>prev+=1)
    memeFetch(urlToMovies,count) 
  }
},[inView])
const forSwitch = ()=>{
  setSwitch(prev=>!prev)
}
    return (
      <div className={cl.center}>
        <div className={cl.content}>
        <div></div><MyTumbler  forSwitch={forSwitch} value={switcher}/>
        {(switcher?<span>Page for Search</span>:<span>List page</span>)}
        </div>
        {
          (!switcher)?(<div className={cl.container}>
            {movies.map((i)=>{
              return(<MovieItem key={i.id} item={i}/>)
            })}
          </div>):(<Search/>)
        }
       
      
      <div ref={ref}></div>
      </div>
    );
  }  
  
  export default Home;