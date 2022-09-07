import { motion } from 'framer-motion';
import ContainerBlue from '../../components/ContainerBlue';
import Header from '../../components/Header';
import CardCommentList from '../../components/CardCommentList';

const Comments = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Header />
    <ContainerBlue />
    <CardCommentList />
  </motion.div>
);

export default Comments;
