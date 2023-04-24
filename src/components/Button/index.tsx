import style from '../../styles/button.module.css'

interface Button{
    textbtn: string;
}

export default function Button(props: Button){
    return(
        <div>
            <button className={style.orangeBtn}> {props.textbtn} </button>
        </div>
    )    
}