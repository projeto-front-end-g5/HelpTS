import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  border: none;
  border-radius: 1.3125rem;
  box-shadow: 0.125rem 0.125rem 0.3125rem 0rem #544848;

  height: 2.5rem;
  width: 15.9375rem;
  padding: 0.7rem;
  background: var(--grey-light);

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

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
`;
