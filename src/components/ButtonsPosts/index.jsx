import { useDashboardContext } from '../../contexts/dashboard/dashboard';
// import { useSolutionsContext } from '../../contexts/solutions/solutions';
import { Container } from './style';

const ButtonsPosts = () => {
  const { showAll, showMine } = useDashboardContext();

  return (
    <Container>
      <button type='button' className='button--todos' onClick={showAll}>
        Todos
      </button>
      <button type='button' className='button--meus' onClick={showMine}>
        Meus
      </button>
    </Container>
  );
};

export default ButtonsPosts;
