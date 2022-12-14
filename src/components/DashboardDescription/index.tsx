import { Container } from './styles';
import pc from '../../assets/pc.svg';
import InputSearch from '../InputSearch';
import TagList from '../TagList';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';

const DashboardDescription = () => {
  const { backGroundColorContainerBlue, backGroundColorDark, currentTheme } =
    useDashboardContext();
  return (
    <Container
      theme={currentTheme}
      backGroundColorContainerBlue={backGroundColorContainerBlue}
      backGroundColorDark={backGroundColorDark}
    >
      <div className='container_description'>
        <img src={pc} alt='Computador' />
        <div className='container_text'>
          <h2>Fala, Dev!</h2>
          <h3>Seja bem vindo(a) ao nosso help do TypeScript.</h3>
          <p>
            Fique à vontade para buscar sua dúvida ou contribuir com a
            comunidade postando sua solução.
          </p>
        </div>
      </div>
      <InputSearch />
      <TagList />
    </Container>
  );
};

export default DashboardDescription;
