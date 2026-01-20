import filterIcon from './filter.svg';
import './FilterBtn.scss';

const FilterBtn = () => {
    return (
        <button className="filter-btn">
            <img src={filterIcon} alt="filter" />
            Filters
        </button>);
}

export default FilterBtn;