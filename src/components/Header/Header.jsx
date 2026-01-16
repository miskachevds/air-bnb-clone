import Logo from '../Logo/Logo';
import Searchbar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';
import './Header.scss';


function Header() {
    return (
        <header className="header">

            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <Logo />
                    </div>
                    <div className="header_search">
                        <Searchbar />
                    </div>
                    <div className="header_user">
                        <UserMenu />
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;