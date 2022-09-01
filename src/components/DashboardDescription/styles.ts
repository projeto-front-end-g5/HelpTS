import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 18.75rem;

  background-color: var(--blue);
  box-shadow: 0px 24px 19px -7px rgba(0, 0, 0, 0.3);

  .container_description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 0.9375rem;

    width: 90%;

    img {
      width: 5.625rem;
      height: 5.625rem;
    }

    @media (min-width: 500px) {
      img {
        width: 6.25rem;
        height: 6.25rem;
      }
    }

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      width: 60%;

      img {
        width: 9.375rem;
        height: 9.375rem;
      }
    }

    @media (min-width: 800px) {
      width: 55%;
    }

    @media (min-width: 1200px) {
      width: 40%;
    }

    @media (min-width: 1800px) {
      width: 30%;
    }

    .container_text {
      display: flex;
      flex-direction: column;

      width: 100%;

      gap: 0.3125rem;

      font-family: 'Ubuntu', sans-serif;

      color: white;

      h2 {
        font-size: 1.25rem;
        font-weight: 700;
      }

      h3 {
        font-size: 0.9375rem;
        font-weight: 700;
      }

      p {
        font-size: 0.75rem;
        padding-top: 0.6875rem;
      }

      @media (min-width: 600px) {
        margin-left: 0.9375rem;
        margin-top: 0;

        h2 {
          font-size: 1.5625rem;
        }

        h3 {
          font-size: 1.125rem;
        }

        p {
          font-size: 0.8125rem;
          padding-top: 0.5rem;
        }
      }

      @media (min-width: 800px) {
        h2 {
          font-size: 1.875rem;
        }

        h3 {
          font-size: 1.25rem;
        }

        p {
          font-size: 0.9375rem;
          padding-top: 0.625rem;
        }
      }
    }
  }
`;
