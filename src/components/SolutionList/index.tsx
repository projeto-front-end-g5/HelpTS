import { useSolutionsContext } from '../../contexts/solutions/solutions';
import SolutionCard from '../SolutionCard';

const SolutionList = () => {
  const { solutions } = useSolutionsContext();

  return (
    <>
      {solutions.length &&
        solutions.map((item) => (
          <SolutionCard
            key={item.id}
            title={item.title}
            tags={item.tags}
            likes={item.likes}
          />
        ))}
      <div />
    </>
  );
};

export default SolutionList;
