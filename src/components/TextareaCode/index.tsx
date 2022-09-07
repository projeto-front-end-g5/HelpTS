/* eslint-disable no-shadow */
import CodeEditor from '@uiw/react-textarea-code-editor';
import { usePostContext } from '../../contexts/createPosts/posts';
import { DivCode } from './style';

const TextareaCode = () => {
  const { textcode, setTextcode } = usePostContext();

  return (
    <DivCode data-color-mode='dark' id='code' value={textcode}>
      <CodeEditor
        value={textcode}
        language='tsx'
        placeholder='Insira seu código aqui'
        onChange={(e) => setTextcode(e.target.value)}
        padding={5}
        style={{
          border: '1px solid var(--blue)',
          height: 60,
          fontSize: 12,
          backgroundColor: 'rgb(42, 39, 52)',
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </DivCode>
  );
};

export default TextareaCode;
