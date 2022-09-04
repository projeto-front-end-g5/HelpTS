import styled from 'styled-components';

export const ContainerPageRegister = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
`;

export const DivPageRegister = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--grey-card);
  flex-wrap: wrap;
  justify-content: center;

  .logo--pageRegister {
    width: 300px;
    min-width: 200px;
    display: flex;
    align-items: center;
  }

  .container--formRegister {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    font-family: ubuntu;
    color: var(--blue-dark);

    .title--formRegister {
      font-size: 1rem;
      font-weight: 700;
    }

    .text--formRegister {
      font-size: 0.7rem;
      padding-bottom: 1rem;
    }

    .textlink--login {
      font-size: 0.9rem;

      .clique {
        text-decoration: underline;
        color: var(--blue-dark);

        :hover {
          color: var(--blue);
        }
      }
    }
  }

  @media only screen and (max-width: 779px) {
    & {
      align-items: center;
      align-content: center;
    }

    svg {
      height: 120px;
    }

    .logo--pageRegister {
      min-width: 120px;
      align-items: flex-end;
      margin-top: 16px;
    }

    .container--formRegister {
      width: 100%;
      align-items: flex-start;
      padding: 1rem;
    }

    .title--formRegister {
      align-self: center;
    }

    .text--formRegister {
      align-self: center;
    }

    .textlink--login {
      font-size: 0.8rem;
    }
  }
`;
