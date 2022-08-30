import { Container } from './styles';
import pc from '../../assets/pc.svg';

const DashboardDescription = () => (
  <Container>
    <img src={pc} alt='Computador' />
    <div className='container_text'>
      <h2>Fala, Dev!</h2>
      <h3>Seja bem vindo(a) ao nosso help do TypeScript.</h3>
      <p>
        Fique à vontade para buscar sua dúvida ou contribuir com a comunidade
        postando sua solução.
      </p>
    </div>
  </Container>
);

export default DashboardDescription;
