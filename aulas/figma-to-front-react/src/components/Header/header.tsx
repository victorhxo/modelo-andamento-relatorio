import './index.css';

import RocketLogo from '../../assets/rocket.svg';

function Header() {
  return (
    <header>
      <div className="header">
        <img src={RocketLogo} alt="icone de um foguete" />
        <span className="first">to</span>
        <span className="second">do</span>
      </div>
    </header>
  );
}

export default Header;
