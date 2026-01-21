import styles from './CategoryItem.module.scss'

const CategoryItem = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <img src="img/categories/01.svg" alt="Cat name" />
            </div>
            <div className={styles.title}>Category Name</div>
        </div>
)
}

export default CategoryItem;