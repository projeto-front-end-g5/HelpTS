import styled from 'styled-components';

export const ContainerPageRegister = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivPageRegister = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  background-color: var(--grey-card);
  flex-wrap: wrap;
  justify-content: center;
  border: 3px solid #4087d700;
  border-radius: 40px;
  box-shadow: 0px 0px 21px 0px rgb(170 167 167);
  position: relative;

  .btn--home {
    background: transparent;
    border: none;
    border-radius: 5px;
    color: var(--blue-dark);
    font-size: 1.5rem;
    position: absolute;
    top: 35px;
    left: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;

    :hover {
      transition: 0.5s;
      background: #00207c30;
    }
  }

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
      border-radius: 20px;
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

    .btn--home {
      top: -15px;
      left: 30px;
    }
  }

  @media screen and (max-width: 321px) {
    & {
      width: 80%;
    }
  }

  @media screen and (max-width: 426px) {
    .btn--home {
      font-size: 1.2rem;
      top: -39px;
      left: 12px;
    }
  }
`;
