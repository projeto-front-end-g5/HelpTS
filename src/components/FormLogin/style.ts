import styled from 'styled-components';
import { FormHTMLAttributes, ReactNode } from 'react';

export const ContainerFormLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const FormLogin = styled.form<IFormProps>`
  width: 100%;
  max-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  .ContainerPassword {
    width: 100%;
    display: flex;
    border: 0.5px solid var(--blue);
    background-color: var(--grey-card);
    padding: 5px;
    border-radius: 3px;

    :focus-within {
      outline: 2px solid var(--blue-dark);
    }
  }

  label {
    align-self: flex-start;
    color: var(--blue);
  }

  p {
    align-self: flex-start;
    color: red;
    font-size: 0.8rem;
  }

  .email--login {
    width: 100%;
    padding: 0.4rem;
    border: 0.5px solid var(--blue);
    border-radius: 3px;
    background-color: var(--grey-card);
    box-sizing: border-box;
    color: var(--blue-dark);
    font-family: 'Ubuntu';

    :focus {
      outline: 2px solid var(--blue-dark);
    }
  }

  .input--password {
    width: 95%;
    border: none;
    background-color: var(--grey-card);
    color: var(--blue-dark);
    font-family: 'Ubuntu';
  }

  .input--password:focus {
    outline: none;
  }

  .btn--password {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  .btn--login {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
    font-family: ubuntu;

    :hover {
      opacity: 0.8;
      transition: 0.5s;
    }
  }

  .iconLogin {
    color: var(--blue-dark);
  }

  @media only screen and (max-width: 779px) {
    .iconLogin {
      height: 13.33px;
    }
  }
`;
