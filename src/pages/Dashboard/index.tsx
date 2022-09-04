import DashboardDescription from '../../components/DashboardDescription';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavCard from '../../components/NavCard';
import SolutionCard from '../../components/SolutionCard';
import { useSolutionsContext } from '../../contexts/solutions/solutions';
import { ButtonAll, DashboardContainer, DivCardDash } from './styles';

const Dashboard = () => {
  const { solutions } =
    useSolutionsContext();
  return <DashboardContainer>
    <Header />

    <DashboardDescription />

    <section className='main--dashboard'>
      <NavCard />
      <DivCardDash/>
      <ButtonAll>Mostrar todos</ButtonAll>
    </section>

    <Footer targetType='_blank' />
  </DashboardContainer>
};

export default Dashboard;
