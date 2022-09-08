<<<<<<< HEAD
import { useParams } from 'react-router-dom';
=======
import { motion } from 'framer-motion';
>>>>>>> develop
import ContainerBlue from '../../components/ContainerBlue';
import Header from '../../components/Header';
import SolutionFullCard from '../../components/SolutionFullCard';


const Solution = () => {

  const params = useParams();
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
      <Header />
      <ContainerBlue />
      <SolutionFullCard id={Number(params.id)}/>
    </motion.div>
  );
}



export default Solution;
