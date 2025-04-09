import { useMediaQuery } from '@mui/material';
import { AuthorizedDesktopHeader } from './AuthorizedDesktopHeader';
import { AuthorizedMobileHeader } from './AuthorizedMobileHeader';
import { UnauthorizedDesktopHeader } from './UnauthorizedDesktopHeader';
import { UnauthorizedMobileHeader } from './UnauthorizedMobileHeader';

export function HeaderRight() {
  const isLoggedIn = localStorage.getItem('token');
  const isMobile = useMediaQuery('(max-width: 1023px)');

  if (isLoggedIn && isMobile) return <AuthorizedMobileHeader />;
  if (isLoggedIn && !isMobile) return <AuthorizedDesktopHeader />;
  if (!isLoggedIn && isMobile) return <UnauthorizedMobileHeader />;
  return <UnauthorizedDesktopHeader />;
}
