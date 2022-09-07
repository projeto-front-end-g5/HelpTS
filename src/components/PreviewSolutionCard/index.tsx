import Highlight, { defaultProps } from 'prism-react-renderer';
import { usePostContext } from '../../contexts/createPosts/posts';
import { ContainerCommentTitle } from '../CardComment/style';
import { ContainerCreatePost } from '../CreatePostCard/style';
import { DivCodePreview, DivTextPreview } from './style';

const PreviewCardSolution = () => {
  const { textcode, texts, title } = usePostContext();

  return (
    <ContainerCreatePost>
      <ContainerCommentTitle>
        <div className='cardComment--name'>
          <p>{title}</p>
        </div>
        <span>30/08/2022</span>
      </ContainerCommentTitle>
      <DivTextPreview>
        <p>{texts}</p>
      </DivTextPreview>

      <DivCodePreview>
        <Highlight {...defaultProps} code={textcode} language='tsx'>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <button className='btn--newPost' type='submit'>
          Finalizar
        </button>
      </DivCodePreview>
    </ContainerCreatePost>
  );
};
export default PreviewCardSolution;
