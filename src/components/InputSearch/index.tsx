import { FaSearch } from 'react-icons/fa';
import { InputSearchContainer } from './styles';
import { useSolutionsContext } from '../../contexts/solutions/solutions';

const InputSearch = () => {
  const { search, setSearch, searchSolution, searchFound } =
    useSolutionsContext();

  return (
    <InputSearchContainer>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Digite aqui sua dúvida'
      />
      <button
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          searchSolution();
          searchFound();
          setSearch('');
        }}
      >
        {' '}
        <FaSearch />
      </button>
    </InputSearchContainer>
  );
};
export default InputSearch;
