import { useCommentsContext } from '../../contexts/comments/comments';
import CardComment from '../CardComment';
import { ContainerListComments } from './style';

const CardCommentList = () => {
  const { listComments } = useCommentsContext();

  return (
    <ContainerListComments>
      {listComments?.map((item) => (
        <CardComment
          key={item.id}
          userId={item.userId}
          content={item.content}
          solutionId={item.solutionId}
          id={item.id}
        />
      ))}
    </ContainerListComments>
  );
};

export default CardCommentList;
