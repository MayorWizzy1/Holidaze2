import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    navigate('/');
  };

  return logout;
}
