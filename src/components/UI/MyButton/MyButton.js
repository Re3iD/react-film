import cl from './MyButton.module.scss'

const MyButton = ({children})=>{
    return(
        <button  className={cl.btn}>
            <slot>{children}</slot>
        </button>
    )
}

export default MyButton