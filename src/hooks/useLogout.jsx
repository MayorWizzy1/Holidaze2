import { useNavigate } from 'react-router-dom';

export function useLogout(setAuthChanged) {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    setAuthChanged((prev) => !prev);
    navigate('/');
  };

  return logout;
}
