import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useLogout } from '../../hooks/useLogout';

export function AuthorizedMobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const username = localStorage.getItem('username');
  const logout = useLogout();

  function toggleHamburgerMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div>
      {isMenuOpen ? (
        <button onClick={toggleHamburgerMenu}>
          <CloseIcon />
        </button>
      ) : (
        <button onClick={toggleHamburgerMenu}>
          <MenuIcon />
        </button>
      )}
      {isMenuOpen ? (
        <ul>
          <li>
            <Link onClick={toggleHamburgerMenu}>Venues</Link>
          </li>
          <li>
            <Link onClick={toggleHamburgerMenu}>List your property</Link>
          </li>
          <li>
            <Link onClick={toggleHamburgerMenu}>Your bookings</Link>
          </li>
          <li>
            <Link onClick={toggleHamburgerMenu}>
              <PermIdentityIcon />
              {username}
            </Link>
          </li>
          <li>
            <button onClick={logout}>
              <LogoutIcon />
              Logout
            </button>
          </li>
        </ul>
      ) : (
        ''
      )}
    </div>
  );
}
