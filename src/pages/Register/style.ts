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

  .logo--pageRegister {
    width: 40%;
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container--formRegister {
    width: 60%;
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
  }

  @media only screen and (max-width: 500px) {
    svg {
      height: 100px;
    }

    .logo--pageRegister {
      min-width: 100px;
      min-height: 100px;
    }

    .container--formRegister {
      width: 100%;
      padding: 1rem;
    }
  }
`;
