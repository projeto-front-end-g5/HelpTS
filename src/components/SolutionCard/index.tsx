import { GoThumbsup } from 'react-icons/go';
import { DivSolutionCard } from './style';

const SolutionCard = () => (
  <DivSolutionCard>
    <div className='card1'>
      <h3>SOLUÇÃO</h3>
      <span className='span--tags'>
        <p>#hashtag</p>
        <p>#hasttag</p>
      </span>
    </div>
    <div className='card1'>
      <div className='div--btnlike'>
        <button className='btn--like' type='button'>
          <GoThumbsup />
        </button>
        <p>10 likes</p>
      </div>
      <span className='span--tags'>
        <p>Comentários</p>
        <p>Dúvidas</p>
      </span>
    </div>
  </DivSolutionCard>
);

export default SolutionCard;
