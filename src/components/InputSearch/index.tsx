import { FaSearch } from 'react-icons/fa';
import { InputSearchContainer } from './styles';

const InputSearch = () => (
  <InputSearchContainer>
    <input placeholder='Digite aqui sua dúvida' />
    <button type='button'>
      {' '}
      <FaSearch />
    </button>
  </InputSearchContainer>
);

export default InputSearch;
