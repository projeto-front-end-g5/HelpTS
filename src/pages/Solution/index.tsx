import { useParams } from 'react-router-dom';
import ContainerBlue from '../../components/ContainerBlue';
import Header from '../../components/Header';
import SolutionFullCard from '../../components/SolutionFullCard';


const Solution = () => {

  const params = useParams();
  return (
    <>
      <Header />
      <ContainerBlue />
      <SolutionFullCard id={Number(params.id)}/>
    </>
  );
}



export default Solution;
