import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DashboardDescription from '../../components/DashboardDescription';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavCard from '../../components/NavCard';
import SolutionList from '../../components/SolutionList';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import { ButtonAll, DashboardContainer, DivCardDash } from './styles';

const Dashboard = () => {
  const { setLimit } = useDashboardContext();

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardContainer>
        <Header />
        <DashboardDescription />
        <section className='main--dashboard'>
          <NavCard />
          <DivCardDash />
          <SolutionList />
          <ButtonAll
            onClick={() => {
              navigate('/posts');
              setLimit(10);
            }}
          >
            Mostrar todos
          </ButtonAll>
        </section>
        <Footer targetType='_blank' />
      </DashboardContainer>
    </motion.div>
  );
};

export default Dashboard;
