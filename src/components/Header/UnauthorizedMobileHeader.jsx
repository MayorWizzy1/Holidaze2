import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export function UnauthorizedMobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Link to="/login" onClick={toggleHamburgerMenu}>
              Sign in
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={toggleHamburgerMenu}>
              Register
            </Link>
          </li>
        </ul>
      ) : (
        ''
      )}
    </div>
  );
}
