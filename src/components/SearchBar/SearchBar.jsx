import Link from '../Link/Link';
import './Searchbar.scss';
import searchIcon from './search.svg';

const Searchbar = () => {
    return (
        <div className="searchbar">
            <div className="searchbar_btns-wrapper">
                
                <div className="searchbar_btn">
                    <Link text='Anywhere' />
                </div>
                <div className="searchbar_btn">
                    <Link text='Any week' />
                </div>
                <div className="searchbar_btn">
                    <Link text='Add guests' />
                </div>

                {/* <button className="searchbar_btn">Any week</button>
                <button className="searchbar_btn searchbar_btn--light">Add guests</button> */}
            </div>

            <button className="searchbar_btn-search">
                <img src={searchIcon} alt="Search" />

            </button>
        </div>
    );
}

export default Searchbar;

