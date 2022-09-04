import Highlight, { defaultProps } from 'prism-react-renderer';
import { ContainerCommentTitle } from '../CardComment/style';
import { ContainerCreatePost } from '../CreatePostCard/style';
import { DivCodePreview, DivTextPreview } from './style';

const exampleCode = `
type Result = "pass" | "fail"
 
function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed")
  } else {
    console.log("Failed")
  }
};
`;

const PreviewCardSolution = () => (
  <ContainerCreatePost>
    <ContainerCommentTitle>
      <div className='cardComment--name'>
        <p>Titulo Solução</p>
      </div>
      <span>30/08/2022</span>
    </ContainerCommentTitle>

    <DivTextPreview>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eum placeat
        quia voluptas. Nihil mollitia nobis recusandae illum exercitationem eos
        nostrum id repellendus ratione magni! Assumenda nobis amet quod ab.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit at
        debitis, non exercitationem illum, obcaecati necessitatibus rerum ipsum
        doloremque dicta, facilis aspernatur veritatis ut aut minima tenetur.
        Deleniti, officia impedit.
      </p>
    </DivTextPreview>

    <DivCodePreview>
      <Highlight {...defaultProps} code={exampleCode} language='tsx'>
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
    </DivCodePreview>
  </ContainerCreatePost>
);

export default PreviewCardSolution;
