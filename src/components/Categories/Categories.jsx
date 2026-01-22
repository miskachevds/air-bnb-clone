import './Categories.scss'
import FilterBtn from '../FilterBtn/FilterBtn';
import CategoryItem from '../CategoryItem/CategoryItem';

import categoriesData from './../../data/categories.json';


const Categories = () => {

    // console.log(categoriesData);
    return (
        <div className="categories">
            <div className="container">
                <div className="categories_row">
                    <div className="categories_list">

                        {categoriesData.map((cat) => {
                            return (
                                <CategoryItem
                                    title={cat.title}
                                    img={cat.img}
                                />
                            )
                        })}
                        {/* <CategoryItem
                            title="lakefront"
                            img="./img/category/02.svg"
                        /> */}
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