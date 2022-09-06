import { useSolutionsContext } from '../../contexts/solutions/solutions';
import EmptyList from '../EmptyList';
import SolutionCard from '../SolutionCard';

const SolutionList = () => {
  const { solutions } = useSolutionsContext();

  return (
    <>
      {solutions.length > 0 ? (
        solutions.map((item) => (
          <SolutionCard
            key={item.id}
            title={item.title}
            tags={item.tags}
            likes={item.likes}
          />
        ))
      ) : (
        <div>
          Carregando...
          <EmptyList />
        </div>
      )}
      <div />
    </>
  );
};

export default SolutionList;
