import { motion } from 'framer-motion';
import ContainerBlue from '../../components/ContainerBlue';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavCard from '../../components/NavCard';
import SolutionList from '../../components/SolutionList';
import { Container } from './style';

const Posts = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Header />
    <ContainerBlue />

    <Container>
      <div className='main--posts'>
        <NavCard />
        <SolutionList />
      </div>
    </Container>
    <Footer targetType='_blank' />
  </motion.div>
);

export default Posts;
