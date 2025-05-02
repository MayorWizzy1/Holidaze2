import { HeaderRight } from './HeaderRight';
import logo from '../../assets/Holidaze.svg';

export function Header({ setAuthChanged }) {
  return (
    <header className="flex items-center justify-between p-4 text-black relative font-roboto lg:py-4 lg:px-32">
      <a href="/" className="w-1/4 lg:w-1/5">
        <img src={logo} alt="Holidaze logo" />
      </a>
      <HeaderRight setAuthChanged={setAuthChanged} />
    </header>
  );
}
