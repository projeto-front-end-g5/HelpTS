import styled from 'styled-components';

export const DivTextPreview = styled.div`
  border: 0.125rem solid var(--blue);
  padding: 15px;
  margin-top: 10px;
  text-align: justify;
  height: 100px;
  word-wrap: break-word;
  p {
    color: var(--blue-dark);
  }
`;

export const DivCodePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;

  .prism-code {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .token-line {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
