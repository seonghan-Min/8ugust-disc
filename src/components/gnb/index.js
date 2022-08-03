import exit from '../../img/exit.png';
import styles from './index.module.css';

function Gnb(props) {
    return (
        <>
        <div className={props.isGnb ? styles.gnb_menu_active : styles.gnb_menu_hidden}>
            <div className={styles.gnb_background}></div>
            <div className={styles.gnb_body}>
                <div className={styles.gnb_body_header}>
                    <img src={exit} className={styles.gnb_exit} onClick={props.fnIsGnb} alt='exit_button'></img>
                </div>
                <div className={styles.gnb_wrap}>
                    <li className={styles.gnb_frst}>검사하기</li>
                    <li className={styles.gnb_list}>DISC 란</li>
                </div>
                <div className={styles.gnb_footer}>8ugust</div>
            </div>
        </div>
        </>
    );
}

export default Gnb;