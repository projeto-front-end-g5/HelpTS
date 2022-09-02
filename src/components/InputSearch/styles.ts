import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
  border: none;
  border-radius: 1.3125rem;
  box-shadow: 0.125rem 0.125rem 0.3125rem 0.0625rem #544848;

  height: 2.1875rem;
  width: 15.9375rem;
  padding: 0.7rem;
  background: var(--grey-light);

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    background-color: transparent;
    font-size: 0.8125rem;
    border: none;
  }

  input:focus {
    outline: 0;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 1rem;
  }

  @media (min-width: 379px) {
    margin-top: 30px;
  }

  @media (min-width: 450px) {
    width: 20rem;
  }

  @media (min-width: 500px) {
    margin-top: 20px;
  }

  @media (min-width: 600px) {
    margin-top: 2.1875rem;
    height: 2.5rem;
  }

  @media (min-width: 800px) {
    width: 21.875rem;
  }

  @media (min-width: 1500px) {
    width: 25rem;
  }
`;
