import DashboardDescription from '../../components/DashboardDescription';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavCard from '../../components/NavCard';
import SolutionList from '../../components/SolutionList';
import { ButtonAll, DashboardContainer, DivCardDash } from './styles';

const Dashboard = () => (
  <DashboardContainer>
    <Header />
    <DashboardDescription />
    <section className='main--dashboard'>
      <NavCard />
      <DivCardDash />
      <SolutionList />
      <ButtonAll>Mostrar todos</ButtonAll>
    </section>
    <Footer targetType='_blank' />
  </DashboardContainer>
);

export default Dashboard;
