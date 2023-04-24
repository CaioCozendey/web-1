import style from '../../styles/first-section.module.css'
import Button from '../Button';

export default function firstSection() {
    return (
        <div className={style.img}>
            <div className={style.container}>
                <div>
                    <h1>Where there is good food,</h1>
                    <h1>there is <span>HAPPINESS.</span> </h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Eget vel turpis sit diam convallis nec non. Sollicitudin fringilla mauris sollicitudin in aliquam.
                    </p>
                    <div className={style.btn}>
                        <Button textbtn='Book Table' />
                    </div>
                </div>
            </div>
        </div>
    );
}