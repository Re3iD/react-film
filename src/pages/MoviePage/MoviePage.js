import MyButton from '../../components/UI/MyButton/MyButton'
import cl from './MoviePage.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'




function MoviePage(props){
    
    const item={...props?.location.item};
    const [comments,setComm] = React.useState([])
    React.useEffect(() => {
        return ()=>{
                if (!props.location.item) {
                    props.history.push("/");
                  }
            }
    }, []);
    const fetchComm = (url)=>{
        
        fetch(url).then((res)=>{
            /* if(res.status===200){
                
                res.headers['Access-Control-Allow-Origin'] = '*'
                res.headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE'
            } */
            
            return res.json()
        }).then((data)=>{
            setComm(prev=>prev = data)
        })
    }
    
    React.useEffect(()=>{
        fetchComm('https://jsonplaceholder.typicode.com/comments?limit=20')
    },[])
    return(
        
        <div className={cl.container}>
            <div className={cl['row-cont']}>
                <img alt='Preview' src={item["medium_cover_image"]}/>
                <div className={cl.column}>
                <div className={cl.descrip}>
                    <h1>{item.title}</h1>
                    <p>
                        <span>{item.year}</span>
                        <span> {item.genres.join('/')}</span>
                    </p>
                    <span>Доступно в: {item.torrents.map(i=>{
                        return(<span key={i.quality} className={cl.strElem}>{' '+i.quality+'.'+i.type}</span>)
                    })}</span>
                    <div className={cl.icon}><FontAwesomeIcon icon={faStar}/><span>{item.rating}</span></div>
                </div>
                <div className={cl.synop}>
                    <p>
                        {item.synopsis}
                    </p>
                    <MyButton><a target='_blank' href={item.url}>Download</a></MyButton>
                    <MyButton><FontAwesomeIcon icon={faHeart}/></MyButton>
                </div>
            </div>
            </div>
            <div className={cl.lower}>
                <iframe src={'https://www.youtube.com/embed/'+item["yt_trailer_code"]}></iframe>
                <div className={cl.comments}>
                    {comments.map(i=>{
                        return(
                            <div className={cl.comment}>
                        <h3>{i.name}//{i.email}</h3>
                        <hr/>
                        <span>{i.body}</span>
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

MoviePage.propTypes = {
    props: PropTypes.object.isRequired
}

export default MoviePage