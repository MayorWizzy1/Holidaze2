import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer';

export function Layout() {
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register')
    return <Outlet />;
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
