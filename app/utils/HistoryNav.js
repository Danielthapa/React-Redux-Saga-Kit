import { useNavigate } from 'react-router-dom';

export const NavHistory = {
  navigate: null,
  push: (page, ...rest) => NavHistory.navigate(page, ...rest),
};

export const NavigateSetter = () => {
  NavHistory.navigate = useNavigate();
  return null;
};
