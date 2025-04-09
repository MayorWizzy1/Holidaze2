import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useLogout } from '../../hooks/useLogout';

export function AuthorizedDesktopHeader() {
  const username = localStorage.getItem('username');
  const logout = useLogout();
  return (
    <nav>
      <ul className="flex gap-10">
        <li>
          <Link className="relative after:absolute after:content-[] after:w-full after:h-[1px] after:bg-black after:bottom-[-4px] after:left-0 after:transform-[scale(0,1)] after:origin-top-left after:transition-transform after:duration-300 hover:after:transform-[scale(1,1)]">
            Venues
          </Link>
        </li>
        <li>
          <Link className="relative after:absolute after:content-[] after:w-full after:h-[1px] after:bg-black after:bottom-[-4px] after:left-0 after:transform-[scale(0,1)] after:origin-top-left after:transition-transform after:duration-300 hover:after:transform-[scale(1,1)]">
            List your property
          </Link>
        </li>
        <li>
          <Link className="relative after:absolute after:content-[] after:w-full after:h-[1px] after:bg-black after:bottom-[-4px] after:left-0 after:transform-[scale(0,1)] after:origin-top-left after:transition-transform after:duration-300 hover:after:transform-[scale(1,1)]">
            Your bookings
          </Link>
        </li>
        <li className="transition-colors duration-300 hover:text-orange">
          <Link className="flex items-center">
            <PermIdentityIcon className="!w-5 mr-1" />
            {username}
          </Link>
        </li>
        <li className="transition-colors duration-300 hover:text-orange">
          <button onClick={logout} className="flex items-center cursor-pointer">
            <LogoutIcon className="!w-5 mr-1" />
            <p>Logout</p>
          </button>
        </li>
      </ul>
    </nav>
  );
}
