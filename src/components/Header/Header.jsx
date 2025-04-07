import { Link } from 'react-router-dom';
import { HeaderRight } from './HeaderRight';
import logo from '../../assets/Holidaze.svg';

export function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Holidaze logo" />
      </Link>
      <HeaderRight />
    </header>
  );
}
