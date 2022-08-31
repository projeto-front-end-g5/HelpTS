import { FaSearch } from 'react-icons/fa';
import { Container } from './styles';

const InputSearch = () => (
  <Container>
    <input placeholder='Digite aqui sua dúvida' />
    <button type='button'>
      {' '}
      <FaSearch />
    </button>
  </Container>
);

export default InputSearch;
