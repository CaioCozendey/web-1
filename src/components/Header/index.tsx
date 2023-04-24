import style from '../../styles/header.module.css'
import Button from '../Button';

export default function Header() {
    return (
        <div>
            <header className={style.header}>
                <div className={style.container}>
                    <a href="#" className={style.logo}><img src="../../images/logo.svg" alt="" /></a>
                    <div className={style.headerRight}>  
                        <a href="#">Home</a>
                        <a href="#">Menu</a>
                        <a href="#">Reservation</a>
                        <a href="#">Pages</a>
                        <a href="#">Blog</a>
                        <a href="#">Gallery</a>
                        <a href="#">Contact</a>
                        <a href=""><Button textbtn='Book Table' /></a>
                    </div>
                </div>
            </header>
        </div>
    );
}