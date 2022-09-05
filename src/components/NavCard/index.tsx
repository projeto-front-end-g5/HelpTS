import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from 'react-icons/io';
import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import { NavTypesContainer } from './style';

function NavCard() {
  const { counter, increase, decrease } = useDashboardContext();
  return (
    <NavTypesContainer>
      <div className='create--type'>
        <IoMdAdd />
      </div>
      <div className='nav--params'>
        {counter === 1 ? (
          <>
            <IoIosArrowBack
              className='willDisable'
              onClick={() => decrease()}
            />
            <IoIosArrowForward onClick={() => increase()} />
          </>
        ) : (
          <>
            <IoIosArrowBack onClick={() => decrease()} />
            <IoIosArrowForward
              className='willDisable'
              onClick={() => increase()}
            />
          </>
        )}
        {
          // :(
          //   <>
          //   <IoIosArrowBack onClick={() => decrease()} />
          //     <IoIosArrowForward onClick={() => increase()} />
          //   </>
          // )
        }

        <p>{counter}</p>
        <span>...</span>
      </div>
    </NavTypesContainer>
  );
}

export default NavCard;
