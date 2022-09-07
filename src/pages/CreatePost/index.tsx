import { motion } from 'framer-motion';
import ContainerBlue from '../../components/ContainerBlue';
import CreatePostCard from '../../components/CreatePostCard';
import Header from '../../components/Header';
import PreviewCardSolution from '../../components/PreviewSolutionCard';
import { ContainerPreview } from './style';

const CreatePost = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Header />
    <ContainerBlue />
    <ContainerPreview>
      <CreatePostCard />
      <h3>Prévia</h3>
      <PreviewCardSolution />
    </ContainerPreview>
  </motion.div>
);

export default CreatePost;
