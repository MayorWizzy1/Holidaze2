import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  return logout;
}
