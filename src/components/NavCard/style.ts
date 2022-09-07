import { ReactNode } from 'react';
import styled from 'styled-components';

interface INavTypesContainer {
  children: ReactNode;
  theme: string;
}

export const NavTypesContainer = styled.div<INavTypesContainer>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'ubuntu';

  margin: 1.875rem 0 1.875rem 0;

  width: 100%;

  button {
    border: none;
    background-color: transparent;
    font-size: 1.1875rem;
  }

  p,
  span {
    cursor: default;
    color: ${({ theme }) =>
      theme === 'light' ? 'color: var(--blue-dark)' : 'var(--grey-light)'};
  }

  .willDisable {
    cursor: not-allowed;
    opacity: 0.3;
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
`;

interface INavParams {
  children: ReactNode;
  theme: string;
}

export const NavParams = styled.div<INavParams>`
  display: flex;

  font-size: 1.125rem;

  @media (min-width: 37.5rem) {
    font-size: 1.375rem;
  }

  :hover {
    cursor: pointer;
  }

  svg {
    color: ${({ theme }) =>
      theme === 'light' ? 'color: var(--blue-dark)' : 'var(--grey-light)'};
  }
`;
