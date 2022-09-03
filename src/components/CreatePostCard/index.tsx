import { FaPaperPlane, FaCode } from 'react-icons/fa';
import { ContainerCommentTitle } from '../CardComment/style';
import { ContainerCreatePost } from './style';

const CreatePostCard = () => (
  <ContainerCreatePost>
    <ContainerCommentTitle>
      <div className='cardComment--name'>
        <strong>B</strong>
        <p>Bruna</p>
      </div>
      <span>30/08/2022</span>
    </ContainerCommentTitle>
    <form className='divInput--newpost'>
      <label className='label--newPost'>
        Titulo
        <input className='input--newPost' type='text' />
      </label>

      <label className='label--newPost'>
        Tag
        <input className='input--newPost' type='text' />
      </label>

      <label className='label--newPost'>
        Solução
        <div className='div--icon'>
          <textarea className='input--newPost' />
          <FaCode className='icon--code' />
        </div>
      </label>

      <section className='footer--newPost'>
        <section className='divbtn--newPost'>
          <button className='btn--newPost' type='button'>
            Limpar tudo
          </button>
          <button className='btn--newPost' type='button'>
            Finalizar
          </button>
        </section>

        <section className='divIcon--newPost'>
          <button className='plane--newPost' type='button'>
            <FaPaperPlane />
          </button>
        </section>
      </section>
    </form>
  </ContainerCreatePost>
);

export default CreatePostCard;
