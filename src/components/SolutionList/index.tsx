import { useSolutionsContext } from '../../contexts/solutions/solutions';
import SolutionCard from '../SolutionCard';
import { ContainerSolutions } from '../SolutionCard/style';

const SolutionList = () => {
  const { filteredSolutions } = useSolutionsContext();
 

  return (
    <ContainerSolutions>
      {filteredSolutions.length &&
        filteredSolutions.map((item) => <SolutionCard key={item.id} item={item} />)}
    </ContainerSolutions>
  );
};

export default SolutionList;
