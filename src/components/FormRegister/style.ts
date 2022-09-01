import styled from 'styled-components';

export const FormReg = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
  margin: 0 auto;
  box-sizing: border-box;
  min-width: 290px;
  max-width: 500px;
  padding: 1rem;

  .label--register {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: var(--blue);
  }

  .input--register {
    width: 100%;
    padding: 0.5rem;
    border: 0.5px solid var(--blue);
    border-radius: 3px;
    background-color: var(--grey-card);
  }

  .btn--register {
    width: 94%;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
  }
`;
