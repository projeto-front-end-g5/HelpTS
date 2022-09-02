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
        <p>
          <IoIosArrowBack onClick={() => decrease()} />
        </p>
        <p>
          <IoIosArrowForward onClick={() => increase()} />
        </p>
        <h6>{counter}</h6>
        <span>...</span>
      </div>
    </NavTypesContainer>
  );
}

export default NavCard;
