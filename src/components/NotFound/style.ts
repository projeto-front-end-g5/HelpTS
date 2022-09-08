import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 150px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin: 30px;
  margin-left: 0;
  transition: width 2s;

  @media (max-width: 500px) {
    width: 350px;
  }
`;
