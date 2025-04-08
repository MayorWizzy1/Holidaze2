import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useLogout } from '../../hooks/useLogout';

export function AuthorizedDesktopHeader() {
  const username = localStorage.getItem('username');
  const logout = useLogout();
  return (
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
      <li>
        <Link>
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
  );
}
