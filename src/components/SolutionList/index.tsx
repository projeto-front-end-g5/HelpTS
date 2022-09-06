import { useSolutionsContext } from '../../contexts/solutions/solutions';
import EmptyList from '../EmptyList';
import SolutionCard from '../SolutionCard';
import { ContainerSolutions } from '../SolutionCard/style';
import { Container } from './style';

const SolutionList = () => {
  const { filteredSolutions } = useSolutionsContext();

  return (
    <ContainerSolutions>
      {filteredSolutions.length ? (
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
