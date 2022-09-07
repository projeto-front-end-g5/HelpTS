import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 30px;
  transition: width 2s;

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;
