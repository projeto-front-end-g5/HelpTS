import { useNavigate } from 'react-router-dom';
import Button from '../ButtonTag';
import { Container } from './style';

const ContainerBlue = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        text='Voltar'
        height='1.25rem'
        onClick={() => navigate('/dashboard')}
        width='3.4rem'
      />
    </Container>
  );
};

export default ContainerBlue;
