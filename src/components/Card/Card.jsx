import starIcon from './star.svg';
import styles from './Card.module.scss';

const Card = () => {
    return (
        <article className={styles.card}>
            <img
                src="./img/objects/01.jpg"
                srcset="./img/objects/01@2x.jpg 2x"
                alt="Alt"
                className={styles.img}
            />
            <div className={styles.descWrapper}>

                <div className={styles.titleWrapper} >
                    <h3 className={styles.title} >Title</h3>
                    <div className={styles.rating} >
                        <img src={starIcon} alt="starIcon" />
                        5.0
                    </div>
                </div>
                <p className={styles.desc} >Desc</p>
                <p className={styles.date} >Apr 16 – 21</p>

                <p className={styles.price} >
                    <strong>$388</strong> nigth
                </p>
            </div>
        </article>
    );
}

export default Card;