import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .main--posts {
    width: 70%;
    margin: 20px;
  }

  @media screen and (max-width: 700px) {
    .main--posts {
      width: 90%;
      margin: 20px;
    }
  }
`;
