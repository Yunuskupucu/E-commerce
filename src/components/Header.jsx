import React from 'react';
import logo from '../images/logo.png';
import '../css/Header.css';
import { CiShoppingBasket } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import { FaMoon } from 'react-icons/fa';

function Header() {
  // const [theme, setTheme] = useState(false);

  // const changeTheme = () => {
  //   const root = document.getElementById('root');
  //   if (theme) {
  //     root.style.backgroundColor = '#1D2A35';
  //     root.style.color = '#fff';
  //   } else {
  //     root.style.backgroundColor = 'white';
  //     root.style.color = 'black';
  //   }
  //   setTheme(!theme);
  // };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div className="flex-row">
        <img className="logo" src={logo} />
        <p className="brand">E-COMMERCE</p>
      </div>
      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Arama yapabilirsiniz"
        />
        <div>
          {/* {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )} */}
          <CiShoppingBasket className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
