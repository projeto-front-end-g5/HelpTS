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

  flex-direction: column;
  width: 90%;
  background-color: var(--grey-card);
  border: 3px solid #4087d700;
  border-radius: 20px;
  box-shadow: 0px 0px 21px 0px rgb(170 167 167);
  position: relative;
  padding: 20px;

  .logo--btnHome-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    .btn--home {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;

      button {
        display: flex;
        align-items: center;
        background: transparent;
        border: none;
        padding: 5px;
        border-radius: 5px;
        color: var(--blue-dark);

        font-size: 18px;

        :hover {
          transition: 0.5s;
          background: #00207c30;
        }

        @media (min-width: 768px) {
          font-size: 25px;
        }
      }
    }
  }

  @media (min-width: 500px) {
    width: 60%;
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
    width: 60%;
  }

  @media (min-width: 1400px) {
    width: 50%;
  }

  @media (min-width: 1600px) {
    width: 35%;
  }

  .logo--pageRegister {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      width: 100%;
      height: 100%;
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
