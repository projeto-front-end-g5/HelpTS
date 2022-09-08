import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Container, ContainerCommentTitle } from './style';

const CardComment = () => {
  const nomeUsuario = localStorage.getItem('userName');

  return (
    <Container>
      <ContainerCommentTitle>
        <div className='cardComment--name'>
          <Avatar sx={{ width: 28, height: 28, bgcolor: deepOrange[500] }}>
            {nomeUsuario && nomeUsuario[0]}
          </Avatar>
          <p>{nomeUsuario}</p>
        </div>
        <span>30/08/2022</span>
      </ContainerCommentTitle>
      <div className='cardComment--content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium
        excepturi quisquam nemo saepe veritatis recusandae ullam itaque corporis
        modi cumque vero officiis vel, quo est repellat. Ipsam, deleniti qui?
      </div>
    </Container>
  );
};
export default CardComment;
