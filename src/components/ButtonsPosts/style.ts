import styled from 'styled-components';

export const Container = styled.div`
  .button--todos,
  .button--meus {
    background-color: var(--blue-dark);
    margin: 2px;
    padding: 10px;
    border-radius: 22px;
    width: 100px;
    color: var(--white);

    &:hover {
      transition: 0.5s;
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;
