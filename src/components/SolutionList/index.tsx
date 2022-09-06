import { useSolutionsContext } from '../../contexts/solutions/solutions';
import SolutionCard from '../SolutionCard';
import { ContainerSolutions } from '../SolutionCard/style';

const SolutionList = () => {
  const { solutions } = useSolutionsContext();
  console.log(solutions);

  return (
    <ContainerSolutions>
      {solutions.length &&
        solutions.map((item) => <SolutionCard key={item.id} item={item} />)}
      <div />
    </ContainerSolutions>
  );
};

export default SolutionList;
