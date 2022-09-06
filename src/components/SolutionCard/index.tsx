import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import {
  ISolutionCardProps,
  useDashboardContext,
} from '../../contexts/dashboard/dashboard';
import { DivSolutionCard } from './style';

const SolutionCard = ({ item }: ISolutionCardProps) => {
  const { buttonClick, Like } = useDashboardContext();
  const { title, tags, likes } = item;
  return (
    <DivSolutionCard>
      <div className='card1'>
        <h3 className='title--card'>{title}</h3>
        <span className='span--tags'>
          {tags.map((tag: string) => (
            <p className='tag--card'>#{tag}</p>
          ))}
        </span>
      </div>
      <div className='card2'>
        <div className='div--btnlike'>
          <button
            className='btn--like'
            type='button'
            onClick={() => Like(item)}
          >
            {buttonClick ? <FaThumbsUp /> : <FaRegThumbsUp />}
          </button>
          <p className='countLike--card'>{likes} likes</p>
        </div>
        <span className='span--tags'>
          <p className='hash--card'>Comentários</p>
          <p className='hash--card'>Dúvidas</p>
        </span>
      </div>
    </DivSolutionCard>
  );
};

export default SolutionCard;
