import { useSolutionsContext } from '../../contexts/solutions/solutions';
import EmptyList from '../EmptyList';
import SolutionCard from '../SolutionCard';
import { ContainerSolutions } from '../SolutionCard/style';
import { Container,SecondContainer } from './style';

const SolutionList = () => {
  const { filteredSolutions, isFound } = useSolutionsContext();
  // console.log(isFound);

  return (
    <ContainerSolutions>
      {isFound === false ? (
        <div>Não há resultado disponível</div>
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
