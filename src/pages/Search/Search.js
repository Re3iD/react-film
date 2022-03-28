import React from 'react';
import MyButton from '../../components/UI/MyButton/MyButton';
import Myinput from '../../components/UI/MyInput/MyInput';
import cl from './Search.module.scss';
import axios from 'axios';
import MovieItem from '../../components/MovieItem/MovieItem';

const Search = ({fetching}) => {
    const [search,setSearch] = React.useState('');
    const [result,setResult] = React.useState([])
    const change = (e)=>{
        console.log(e.target.value)
        setSearch(e.target.value)
      }
const getResFetch = async (str)=>{
    if(str.length<2){
        return;
    }else{
        
    let res = await axios.get(('https://yts.torrentbay.to/api/v2/list_movies.json?query_term='+str),{
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET, PUT, POST, DELETE'
        }
    })
    setResult(prev=>prev=[...res.data.movies])
}
}
    return (
        <div>
            <div className={cl.search}>
                <Myinput value={search} change={change}/>
                <MyButton onclick={getResFetch(search)} >Search</MyButton>
            </div>
            <div className={cl.container}>
                {result.map(i=>{
                    return(<MovieItem key={i.id} item={i}/>)
})}
            </div>
        </div>
    );
}

export default Search;
