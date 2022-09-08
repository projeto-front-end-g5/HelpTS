/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaPaperPlane, FaCode } from 'react-icons/fa';
import { ContainerCommentTitle } from '../CardComment/style';
import { ContainerCreatePost } from './style';
import { usePostContext } from '../../contexts/createPosts/posts';
import { DivCode } from '../TextareaCode/style';
import { newPostSchema } from '../../validator/schema';

interface INewPost {
  title: string;
  tags: string;
  text: string;
  code: string;
}

const CreatePostCard = () => {
  const {
    texts,
    setTexts,
    newSolution,
    textcode,
    setTextcode,
    setTitle,
    getDate,
  } = usePostContext();

  const [iconcode, setIconcode] = useState(false);
  const [teste, setTeste] = useState('');

  const nomeUsuario = localStorage.getItem('userName');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewPost>({ resolver: yupResolver(newPostSchema) });

  return (
    <ContainerCreatePost>
      <ContainerCommentTitle>
        <div className='cardComment--name'>
          <Avatar sx={{ width: 28, height: 28, bgcolor: deepOrange[500] }}>
            {nomeUsuario && nomeUsuario[0]}
          </Avatar>
          <p>{nomeUsuario}</p>
        </div>
        <span>{getDate()}</span>
      </ContainerCommentTitle>
      <form
        className='divInput--newpost'
        onSubmit={handleSubmit(newSolution as SubmitHandler<FieldValues>)}
      >
        <label className='label--newPost'>
          Titulo
          <input
            {...register('title')}
            className='input--newPost'
            type='text'
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors && <p>{errors.title?.message}</p>}
        </label>

        <label htmlFor='tag' className='label--select'>
          Tag
          <select id='tag' {...register('tags')}>
            <option value={teste}>Escolha uma tag</option>
            <option value='state'>state</option>
            <option value='function'>function</option>
            <option value='png'>png</option>
            <option value='axios'>axios</option>
            <option value='props'>props</option>
            <option value='contextApi'>contextApi</option>
            <option value='parameter'>parameter</option>
          </select>
          {errors && <p>{errors.tags?.message}</p>}
        </label>

        {iconcode === false ? (
          <div className='codearea'>
            <label className='label--newPost'>
              Solução
              <div className='div--icon'>
                <textarea
                  {...register('text')}
                  className='input--newText'
                  value={texts}
                  onChange={(e) => setTexts(e.target.value)}
                />
                <FaCode
                  className='icon--code'
                  onClick={() => setIconcode(!iconcode)}
                />
              </div>
            </label>
          </div>
        ) : (
          <div className='codearea'>
            <label className='label--newPost'>
              Código
              <div className='div--iconCode'>
                <DivCode data-color-mode='dark'>
                  <CodeEditor
                    {...register('code')}
                    value={textcode}
                    language='tsx'
                    placeholder='Insira seu código aqui'
                    onChange={(e) => setTextcode(e.target.value)}
                    padding={5}
                    style={{
                      overflow: 'auto',
                      border: '1px solid var(--blue)',
                      borderRadius: 5,
                      height: 70,
                      fontSize: 12,
                      backgroundColor: 'rgb(42, 39, 52)',
                      fontFamily:
                        'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                  />
                </DivCode>
                <FaCode
                  className={iconcode ? 'icon--code2' : 'icon--code'}
                  onClick={() => setIconcode(!iconcode)}
                />
              </div>
            </label>
          </div>
        )}

        <section className='footer--newPost'>
          <section className='divbtn--newPost'>
            <input
              className='btn--newPost'
              type='reset'
              value='Limpar tudo'
              onClick={() => {
                setTexts('');
                setTitle('');
              }}
            />
          </section>

          <section className='divIcon--newPost'>
            <button className='plane--newPost' type='submit'>
              <FaPaperPlane />
            </button>
          </section>
        </section>
      </form>
    </ContainerCreatePost>
  );
};

export default CreatePostCard;
