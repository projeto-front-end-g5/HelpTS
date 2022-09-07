/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import CodeEditor from '@uiw/react-textarea-code-editor';
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
  const { texts, setTexts, newSolution, textcode, setTextcode, setTitle } =
    usePostContext();
  const [iconcode, setIconcode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewPost>({ resolver: yupResolver(newPostSchema) });

  return (
    <ContainerCreatePost>
      <ContainerCommentTitle>
        <div className='cardComment--name'>
          <strong>B</strong>
          <p>Bruna</p>
        </div>
        <span>30/08/2022</span>
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

        <label className='label--newPost'>
          Tag
          <input className='input--newPost' type='text' {...register('tags')} />
        </label>

        {iconcode === false ? (
          <div className='codearea'>
            <label className='label--newPost'>
              Solução
              <div className='div--icon'>
                <textarea
                  {...register('text')}
                  className='input--newPost'
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
                      border: '1px solid var(--blue)',
                      borderRadius: 5,
                      height: 60,
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
              onClick={() => setTexts('')}
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
