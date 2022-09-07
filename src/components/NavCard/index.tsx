import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import ButtonsPosts from '../ButtonsPosts';
import { NavTypesContainer } from './style';

function NavCard() {
  const { counter, increase, decrease } = useDashboardContext();
  const rota = useParams();

  return (
    <NavTypesContainer>
      {rota.posts === 'posts' ? (
        <ButtonsPosts />
      ) : (
        <Link to='/newpost'>
          <div className='create--type'>
            <IoMdAdd />
          </div>
        </Link>
      )}
      <div className='nav--params'>
        {counter === 1 ? (
          <>
            <button type='button' disabled>
              <IoIosArrowBack
                className='willDisable'
                onClick={() => decrease()}
              />
            </button>
            <button type='button'>
              <IoIosArrowForward onClick={() => increase()} />
            </button>
          </>
        ) : counter === 5 ? (
          <>
            <button type='button'>
              <IoIosArrowBack onClick={() => decrease()} />
            </button>
            <button type='button' disabled>
              <IoIosArrowForward
                className='willDisable'
                onClick={() => increase()}
              />
            </button>
          </>
        ) : (
          <>
            <button type='button'>
              <IoIosArrowBack onClick={() => decrease()} />
            </button>
            <button type='button'>
              <IoIosArrowForward onClick={() => increase()} />
            </button>
          </>
        )}

        <p>{counter}</p>
        <span>...</span>
      </div>
    </NavTypesContainer>
  );
}

export default NavCard;
