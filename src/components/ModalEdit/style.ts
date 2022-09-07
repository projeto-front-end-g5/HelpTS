import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--blue-dark);
  font-family: 'Ubuntu';
  padding: 30px 40px;

  h3 {
    margin-top: 20px;
    text-align: center;
    font-family: 'Ubuntu';
    font-size: 1.5rem;
  }

  label {
    text-align: center;
    font-size: 1.1rem;
    text-align: left;
    width: 100%;
  }

  input,
  select,
  textarea {
    width: 100%;
    border: 0.5px solid var(--blue);
    border-radius: 3px;
    background-color: var(--grey-card);
    color: var(--blue-dark);

    :focus {
      outline: 1px solid var(--blue-dark);
    }
  }

  input {
    height: 2.5rem;
    padding: 5px;
  }

  select {
    height: 2.5rem;
  }

  textarea {
    height: 8rem;
    padding: 5px;
  }

  form {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .Container-buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    width: 10rem;
    height: 4rem;
    border: none;
    border-radius: 10px;
    background-color: var(--blue-dark);
    color: var(--grey-light);
    font-family: 'Ubuntu';
    font-size: 1rem;

    :hover {
      opacity: 0.8;
      transition: 0.5s;
    }
  }

  @media only screen and (max-width: 480px) {
    button {
      width: 8.5rem;
      height: 4rem;
    }
  }

  @media only screen and (max-width: 388px) {
    button {
      width: 5rem;
      height: 4rem;
    }
  }
`;
