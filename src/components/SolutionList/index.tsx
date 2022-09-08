import { useParams } from 'react-router-dom';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import { useSolutionsContext } from '../../contexts/solutions/solutions';
import EmptyList from '../EmptyList';
import NotFound from '../NotFound';
import SolutionCard from '../SolutionCard';
import { ContainerSolutions } from '../SolutionCard/style';
import { Container, ContainerNotFound, SecondContainer } from './style';

const SolutionList = () => {
  const { filteredSolutions, isFound, OpenSolution } = useSolutionsContext();
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
         <SecondContainer onClick={() => OpenSolution(item.id)}>
          <SolutionCard 
          key={item.id} 
          item={item}/>
         </SecondContainer> 
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
