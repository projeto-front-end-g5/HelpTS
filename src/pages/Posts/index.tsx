import ContainerBlue from '../../components/ContainerBlue';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavCard from '../../components/NavCard';
import SolutionList from '../../components/SolutionList';
import { Container } from './style';

const Posts = () => (
  <>
    <Header />
    <ContainerBlue />

    <Container>
      <div className='main--posts'>
        <NavCard />
        <SolutionList />
      </div>
    </Container>
    <Footer targetType='_blank' />
  </>
);

export default Posts;
