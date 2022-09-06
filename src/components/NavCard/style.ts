import styled from 'styled-components';

export const NavTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'ubuntu';

  margin-top: 1.875rem;

  width: 90%;

  button {
    border: none;
    background-color: transparent;
    font-size: 1.1875rem;
  }

  p,
  span {
    cursor: default;
  }

  .willDisable {
    cursor: not-allowed;
  }

  .create--type {
    display: flex;
    align-items: center;

    font-size: 1.25rem;

    width: fit-content;
    height: fit-content;

    border-radius: 50%;

    color: var(--yellow);
    background-color: var(--blue-dark);

    @media (min-width: 37.5rem) {
      font-size: 1.5625rem;
    }

    @media (min-width: 64rem) {
      font-size: 1.875rem;
      font-weight: 800;
    }

    :hover {
      cursor: pointer;
    }
  }

  .nav--params {
    display: flex;

    font-size: 1.125rem;

    @media (min-width: 37.5rem) {
      font-size: 1.375rem;
    }

    :hover {
      cursor: pointer;
    }
  }
`;
