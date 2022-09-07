import { useParams } from 'react-router-dom';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import { useSolutionsContext } from '../../contexts/solutions/solutions';
import EmptyList from '../EmptyList';
import NotFound from '../NotFound';
import SolutionCard from '../SolutionCard';
import { ContainerSolutions } from '../SolutionCard/style';
import { Container, ContainerNotFound } from './style';

const SolutionList = () => {
  const { filteredSolutions, isFound } = useSolutionsContext();
  const { setLimit } = useDashboardContext();
  const rota = useParams();

  if (rota.posts === 'posts') {
    setLimit(10);
  } else {
    setLimit(4);
  }

  return (
    <ContainerSolutions>
      {isFound === false ? (
        <ContainerNotFound>
          <div>Não há resultado disponível</div>
          <NotFound />
        </ContainerNotFound>
      ) : filteredSolutions.length ? (
        filteredSolutions.map((item) => (
          <SolutionCard key={item.id} item={item} />
        ))
      ) : (
        <Container>
          <p>Carregando...</p>
          <EmptyList />
        </Container>
      )}
    </ContainerSolutions>
  );
};

export default SolutionList;
