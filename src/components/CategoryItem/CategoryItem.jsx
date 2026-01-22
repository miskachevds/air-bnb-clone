import styles from './CategoryItem.module.scss'

const CategoryItem = ({title,img}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src={img} alt="Cat name" />
            </div>
            <div className={styles.title}>{title}</div>
        </div>
)
}

export default CategoryItem;