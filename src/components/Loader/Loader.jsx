import cl from './Loader.module.scss'

const Loader = ()=>{
    return(
        <div className={cl.loadContainer}>
  <div className={cl.dotContainer}>
    <div className={cl.dot}></div>
    <div className={cl.dot}></div>
    <div className={cl.dot}></div>  
  </div>
  <div  className={cl.dotContainer}>
    <div className={cl.dot}></div>
    <div className={cl.dot}></div>
    <div className={cl.dot}></div>  
  </div>
  <div className={cl.dotContainer}>
    <div className={cl.dot}></div>
    <div className={cl.dot}></div>
    <div className={cl.dot}></div>  
  </div>
</div>
    )
}

export default Loader