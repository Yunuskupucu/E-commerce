import logo from '../images/logo.png';
import '../css/Header.css';
import { CiShoppingBasket } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';

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
          <Badge badgeContent={4} color="primary">
            <CiShoppingBasket className="icon" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
