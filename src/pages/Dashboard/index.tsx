import DashboardDescription from '../../components/DashboardDescription';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SolutionCard from '../../components/SolutionCard';
import { ButtonAll } from './styles';

const Dashboard = () => (
  <>
    <Header />

    <DashboardDescription />

    <SolutionCard />
    <ButtonAll>Mostrar todos</ButtonAll>
    <Footer targetType='_blank' />
  </>
);

export default Dashboard;
