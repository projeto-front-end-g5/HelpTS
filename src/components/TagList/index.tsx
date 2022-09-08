import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import { useSolutionsContext } from '../../contexts/solutions/solutions';
import { Button, ListTagContainer } from './style';

function TagList() {
  const { tags } = useDashboardContext();
  const { filterTags } = useSolutionsContext();

  return (
    <ListTagContainer>
      {tags.map((item) => (
        <li key={item.id}>
          <Button onClick={() => filterTags(item.tag)}>{item.tag}</Button>
        </li>
      ))}
    </ListTagContainer>
  );
}

export default TagList;
