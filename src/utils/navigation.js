import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  const navigateToCareer = () => {
    navigate('/career');
  };

  const navigateToService = (service) => {
    navigate(`/services/${service}`);
  };

  const navigateToPortfolio = () => {
    navigate('/portfolio');
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToCalendly = () => {
    window.open('https://calendly.com/infinoidtech/infinoid-technologies', '_blank');
  };

  return {
    navigateToContact,
    navigateToCareer,
    navigateToService,
    navigateToPortfolio,
    navigateToAbout,
    navigateToHome,
    navigateToCalendly
  };
}; 