import { Link } from 'react-router-dom';
import logo from '../assets/Holidaze.svg';

export function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logo} alt="Holidaze logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link>Venues</Link>
          </li>
          <li>
            <Link>List your property</Link>
          </li>
          <li>
            <Link>Your bookings</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">About us</Link>
          </li>
          <li>
            <Link to="#">Contact us</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Terms & conditions</Link>
          </li>
          <li>
            <Link to="#">Privacy & cookies</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
