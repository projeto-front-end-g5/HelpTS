import { useTagListContext } from "../../contexts/TagListContext";
import { Button, ListTagContainer } from "./style";


function TagList() {
    const {tags} = useTagListContext();
    return (
        <ListTagContainer>
            {
                tags.map((item) => (
                    <li>
                        <Button>{item}</Button>
                    </li>
                ))
            }
        </ListTagContainer>
    )
}

export default TagList;
   


