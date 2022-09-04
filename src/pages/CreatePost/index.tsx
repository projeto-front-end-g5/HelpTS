import ContainerBlue from '../../components/ContainerBlue';
import CreatePostCard from '../../components/CreatePostCard';
import Header from '../../components/Header';
import PreviewCardSolution from '../../components/PreviewSolutionCard';
import { ContainerPreview } from './style';

const CreatePost = () => (
  <>
    <Header />
    <ContainerBlue />
    <ContainerPreview>
      <CreatePostCard />
      <h3>Prévia</h3>
      <PreviewCardSolution />
    </ContainerPreview>
  </>
);

export default CreatePost;
