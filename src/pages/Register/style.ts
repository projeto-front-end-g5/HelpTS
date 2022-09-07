import styled from 'styled-components';

export const ContainerPageRegister = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivPageRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  background-color: var(--grey-card);
  border: 3px solid #4087d700;
  border-radius: 20px;
  box-shadow: 0px 0px 21px 0px rgb(170 167 167);
  position: relative;

  @media (min-width: 500px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;

    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }

  @media (min-width: 1100px) {
    width: 65%;
  }

  @media (min-width: 1400px) {
    width: 60%;
  }

  @media (min-width: 1600px) {
    width: 50%;
  }

  .logo--pageRegister {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      width: 50%;
    }
  }

  .container--formRegister {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: ubuntu;
    color: var(--blue-dark);

    .title--formRegister {
      font-size: 1rem;
      font-weight: 700;

      @media (min-width: 500px) {
        font-size: 1.125rem;
      }

      @media (min-width: 768px) {
        margin-top: 30px;
      }
    }

    .text--formRegister {
      font-size: 0.7rem;
      padding-bottom: 1rem;

      @media (min-width: 500px) {
        font-size: 13px;
      }
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
`;
