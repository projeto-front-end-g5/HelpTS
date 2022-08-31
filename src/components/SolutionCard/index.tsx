import { GoThumbsup } from 'react-icons/go';
import { DivPai, DivSolutionCard } from './style';

const SolutionCard = () => (
  <DivPai>
    <DivSolutionCard>
      <div className='card1'>
        <h3 className='title--card'>SOLUÇÃO</h3>
        <span className='span--tags'>
          <p className='hash--card'>#hashtag</p>
          <p className='hash--card'>#hashtag</p>
        </span>
      </div>
      <div className='card1'>
        <div className='div--btnlike'>
          <button className='btn--like' type='button'>
            <GoThumbsup />
          </button>
          <p className='hash--card'>10 likes</p>
        </div>
        <span className='span--tags'>
          <p className='hash--card'>Comentários</p>
          <p className='hash--card'>Dúvidas</p>
        </span>
      </div>
    </DivSolutionCard>
  </DivPai>
);

export default SolutionCard;
