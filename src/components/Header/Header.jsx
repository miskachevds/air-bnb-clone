import './Header.scss';

function Header() {
    return (
        <header className="header">

            <div className="container">
                <div className="header-row">
                    <div className="header_logo">LOGO</div>
                    <div className="header_search">SEARCH</div>
                    <div className="header_user">USER MENU</div>
                </div>
            </div>

        </header>
    )
}

export default Header;