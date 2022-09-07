import styled from 'styled-components';
import { FormHTMLAttributes, ReactNode } from 'react';

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const ContainerFormLogin = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1600px) {
    width: 70%;
  }

  .ContainerLinkResgister {
    margin-bottom: 10px;
  }
`;

export const FormLogin = styled.form<IFormProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  .ContainerPassword {
    width: 100%;
    display: flex;
    border: 0.5px solid var(--blue);
    background-color: var(--grey-card);
    padding: 0.3125rem;
    border-radius: 3px;
    margin-bottom: 10px;

    @media (min-width: 500px) {
      padding: 0.5rem;
    }
  }

  .email--login {
    width: 100%;
    padding: 0.3125rem;
    border: 0.5px solid var(--blue);
    border-radius: 3px;
    background-color: var(--grey-card);
    box-sizing: border-box;
    color: var(--blue-dark);
    font-family: 'Ubuntu';
    margin-bottom: 10px;
    outline: none;

    @media (min-width: 500px) {
      padding: 0.5rem;
    }
  }

  .input--password {
    width: 100%;
    border: none;
    background-color: var(--grey-card);
    color: var(--blue-dark);
    font-family: 'Ubuntu';
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

    @media (min-width: 500px) {
      padding: 0.625rem;
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
