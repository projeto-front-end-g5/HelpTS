import { useDashboardContext } from '../../contexts/dashboard/dashboard';
import { Button, ListTagContainer } from './style';

function TagList() {
  const { tags } = useDashboardContext();
  return (
    <ListTagContainer>
      {tags.map((item) => (
        <li>
          <Button>{item}</Button>
        </li>
      ))}
    </ListTagContainer>
  );
}

export default TagList;
