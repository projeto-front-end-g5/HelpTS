import ContainerBlue from '../../components/ContainerBlue';
import CreatePostCard from '../../components/CreatePostCard';
import Header from '../../components/Header';
import PreviewCardSolution from '../../components/PreviewSolutionCard';
import { usePostContext } from '../../contexts/createPosts/posts';
import { ContainerPreview } from './style';

const CreatePost = () => {
  const { title } = usePostContext();
  return (
    <>
      <Header />
      <ContainerBlue />
      <ContainerPreview>
        <CreatePostCard />
        {title !== '' && (
          <>
            <h3>Prévia</h3>
            <PreviewCardSolution />
          </>
        )}
      </ContainerPreview>
    </>
  );
};
export default CreatePost;
