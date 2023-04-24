import style from '../../styles/second-section.module.css'
import Button from '../Button';
import Card from '../Cards/card-second-section';

export default function secondSection() {
    return (
        <div className={style.containerCards1}>
            <div className={style.containerCards2}>
                <a href="#">
                    <Card
                        imageUrl="../../images/icon-clock.svg"
                        hours='7:00 AM  to 7:00 PM'
                        text='Working Hours'
                    />
                </a>

                <a href="#">
                    <Card
                        imageUrl="../../images/icon-pin.svg"
                        hours='C.P Delhi'
                        text='Get Directions'
                    />
                </a>
                <a href="#">
                    <Card
                        imageUrl="../../images/icon-phone.svg"
                        hours='+91 123456789'
                        text='Contact us'
                    />
                </a>
            </div>
            <div className={style.container}>
                <div className={style.containerImg}>
                    <img src="../../images/food-indian-hand.svg" alt="" />
                </div>
                <div className={style.container2}>
                    <h1>About US</h1>
                    <h2>The most essential part of a well-balanced diet is - FOOD!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Eget vel turpis sit diam convallis nec non. Sollicitudin fringilla mauris sollicitudin in aliquam. Lorem ipsum dolor sit amet consectetur. Eget vel turpis sit diam convallis nec non. Sollicitudin fringilla mauris sollicitudin in aliquam. Lorem ipsum dolor sit amet consectetur. Eget vel turpis sit diam convallis nec non. Sollicitudin fringilla mauris sollicitudin in aliquam. </p>
                    <Button textbtn='Read more' />
                </div>
            </div>
        </div>
    )
}