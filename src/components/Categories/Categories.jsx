import './Categories.scss'
import FilterBtn from '../FilterBtn/FilterBtn';
import CategoryItem from '../CategoryItem/CategoryItem';

const Categories = () => {
    return (
        <div className="categories">
            <div className="conteiner">
                <div className="categories_row">
                    <div className="categories_list">
                        <CategoryItem />
                    </div>
                    <div className="categories_filter">
                        <FilterBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;