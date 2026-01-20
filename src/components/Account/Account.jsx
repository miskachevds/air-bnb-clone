import navIcon from './nav.svg';
import './Account.scss';

const Account = () => {
    return (
        <button className="account">
            <div className="account_nav-icon">
                <img src={navIcon} alt="Nav" />
            </div>
            <div className="account_avatar">
                <img src="./img/icons/user-avatar.svg" alt="User avatar" />
            </div>
        </button>
    );
}

export default Account;