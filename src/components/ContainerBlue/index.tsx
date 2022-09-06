import { useNavigate } from 'react-router-dom';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import Button from '../ButtonTag';
import { Container } from './style';

const ContainerBlue = () => {
  const navigate = useNavigate();
  const { setLimit } = useDashboardContext();

  return (
    <Container>
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
