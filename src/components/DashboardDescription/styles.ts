import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--blue);
  display: flex;
  justify-content: center;
  height: 18.75rem;
  padding-top: 3.125rem;

  img {
    width: 9rem;
    height: 9rem;
  }

  .container_text {
    width: 18.75rem;
    margin-left: 1rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 9px;
    font-family: 'Nunito';

    h2 {
      font-size: 25px;
      font-weight: 700;
    }

    h3 {
      font-size: 19px;
      font-weight: 700;
    }

    p {
      font-size: 14px;
      padding-top: 17px;
    }
  }
`;
