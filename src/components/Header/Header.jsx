import { Link } from 'react-router-dom';
import { HeaderRight } from './HeaderRight';
import logo from '../../assets/Holidaze.svg';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-black relative font-roboto lg:py-4 lg:px-32">
      <Link to="/" className="w-1/4 lg:w-1/5">
        <img src={logo} alt="Holidaze logo" />
      </Link>
      <HeaderRight />
    </header>
  );
}
