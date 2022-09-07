import { useNavigate } from 'react-router-dom';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import Button from '../ButtonTag';
import { Container } from './style';

const ContainerBlue = () => {
  const navigate = useNavigate();
  const {
    setLimit,
    currentTheme,
    backGroundColorContainerBlue,
    backGroundColorDark,
  } = useDashboardContext();

  return (
    <Container
      theme={currentTheme}
      backGroundColorContainerBlue={backGroundColorContainerBlue}
      backGroundColorDark={backGroundColorDark}
    >
      <Button
        text='Voltar'
        height='1.25rem'
        onClick={() => {
          navigate('/dashboard');
          setLimit(4);
        }}
        width='3.4rem'
      />
    </Container>
  );
};

export default ContainerBlue;
