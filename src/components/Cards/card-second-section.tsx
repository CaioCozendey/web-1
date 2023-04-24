import style from "../../styles/card-second-section.module.css";


interface CardProps{
    imageUrl: string;
    hours: string;
    text: string;
}

export default function Card(props: CardProps){
    return(
        <div className={style.container}>
            <img src={props.imageUrl} alt="Icone de relógio" />
            <h4>{props.hours}</h4>
            <p>{props.text}</p>
        </div>
    );
}