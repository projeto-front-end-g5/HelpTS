import styled from 'styled-components';
import { FormHTMLAttributes, ReactNode } from 'react';

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const FormReg = styled.form<IFormProps>`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 0 auto;
  box-sizing: border-box;

  .input--register {
    width: 100%;
    padding: 5px;
    border: 0.5px solid var(--blue);
    border-radius: 3px;
    background-color: var(--grey-card);
    box-sizing: border-box;

    margin-bottom: 10px;

    :focus {
      outline: 1px solid var(--blue-dark);
    }

    ::placeholder {
      font-family: ubuntu;
      font-size: 0.7rem;
    }

    @media (min-width: 500px) {
      padding: 8px;
    }
  }

  .btn--register {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
    font-family: ubuntu;

    margin-bottom: 20px;

    :hover {
      opacity: 0.8;
      transition: 0.5s;
    }

    @media (min-width: 500px) {
      padding: 10px;
    }
  }
`;

export const LabelErrors = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  color: var(--blue);
  font-family: ubuntu;
  font-weight: 700;
  font-size: 0.7rem;

  p {
    color: #9b2226;
  }
`;
