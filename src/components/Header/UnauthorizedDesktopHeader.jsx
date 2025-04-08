import { Link } from 'react-router-dom';

export function UnauthorizedDesktopHeader() {
  return (
    <ul>
      <li>
        <Link>Venues</Link>
      </li>
      <li>
        <Link>List your property</Link>
      </li>
      <li>
        <Link to="/login">Sign in</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
}
