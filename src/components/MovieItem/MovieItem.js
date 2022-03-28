import cl from './MovieItem.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const MovieItem = ({item})=>{
    const textFormatter = (text)=>{
        return (text.length>200)?text.slice(0,200)+' ...\nRead in details':text;
    }
    return(
       <Link key={item.id} className={cl.link} to={{
           pathname:"/movie-details",
           item
       }}>
        <div className={cl.container}>
                <img src={item["medium_cover_image"]}/>
            <div className={cl.overlay}>
                <div className={cl.text}>
                <h2>{item.title}</h2>
                <hr></hr>
                <span>{textFormatter(item.synopsis)}</span>
                </div>
            </div>
        </div>
        </Link>
    )
}
MovieItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default MovieItem