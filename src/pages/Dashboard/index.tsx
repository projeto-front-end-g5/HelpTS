import DashboardDescription from '../../components/DashboardDescription';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavCard from '../../components/NavCard';
import SolutionCard from '../../components/SolutionCard';
import { ButtonAll, DashboardContainer } from './styles';

const Dashboard = () => (
  <DashboardContainer>
    <Header />

    <DashboardDescription />

    <NavCard />

    {/* <SolutionCard /> */}

    {/* <ButtonAll>Mostrar todos</ButtonAll> */}

    <Footer targetType='_blank' />
  </DashboardContainer>
);

export default Dashboard;
