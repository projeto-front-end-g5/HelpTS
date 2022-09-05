import { GoThumbsup } from 'react-icons/go';
import { DivSolutionCard } from './style';

interface ISolutionCardProps {
  title: string;
  tags: string[];
  likes: number;
}

const SolutionCard = ({ title, tags, likes }: ISolutionCardProps) => (
  <DivSolutionCard>
    <div className='card1'>
      <h3 className='title--card'>{title}</h3>
      <span className='span--tags'>
        {tags.map((tag) => (
          <p className='hash--card'>#{tag}</p>
        ))}
      </span>
    </div>
    <div className='card2'>
      <div className='div--btnlike'>
        <button className='btn--like' type='button'>
          <GoThumbsup />
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

export default SolutionCard;
