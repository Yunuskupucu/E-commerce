import React from 'react';
import logo from '../images/logo.png';
import '../css/Header.css';
import { CiShoppingBasket } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import { FaMoon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div className="flex-row" onClick={() => navigate('/')}>
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
