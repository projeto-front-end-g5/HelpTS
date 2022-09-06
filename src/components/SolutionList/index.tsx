import { useSolutionsContext } from '../../contexts/solutions/solutions';
import EmptyList from '../EmptyList';
import SolutionCard from '../SolutionCard';
import { ContainerSolutions } from '../SolutionCard/style';

const SolutionList = () => {
  const { filteredSolutions } = useSolutionsContext();

  return (
    <>
    <ContainerSolutions>
      {filteredSolutions.length ? 
        filteredSolutions.map((item) => <SolutionCard key={item.id} item={item} />)
        : (
        <div>
          Carregando...
          <EmptyList />
        </div>
      )
        }
    </ContainerSolutions>
    </>
};

export default SolutionList;
