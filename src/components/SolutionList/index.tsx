import {  ButtonHTMLAttributes, ReactNode} from "react";
import { useNavigate } from "react-router-dom";
import { useSolutionsContext } from '../../contexts/solutions/solutions';
import SolutionCard from '../SolutionCard';
import { Container } from './style';





const SolutionList = () => {
  const { solutions } = useSolutionsContext();
  const navigate = useNavigate();

  return (
      <>
      {solutions.length &&
        solutions.map((item) => (
          <Container onClick={() => {
            navigate(`/solution/${item.id}`)
          }}>
          <SolutionCard
            key={item.id}
            title={item.title}
            tags={item.tags}
            likes={item.likes}
          />
          </Container>
        ))}
      <div />
    </>
  );
};

export default SolutionList;
