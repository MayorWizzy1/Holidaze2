import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer';

export function Layout({ setAuthChanged }) {
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register')
    return <Outlet />;
  return (
    <div>
      <Header setAuthChanged={setAuthChanged} />
      <Outlet />
      <Footer />
    </div>
  );
}
