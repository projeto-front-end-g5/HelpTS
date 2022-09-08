import styled from 'styled-components';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ISecondContainer extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const SecondContainer = styled.div<ISecondContainer>`
  cursor: pointer;
`;

export const Container = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Ubuntu';
  color: var(--blue-dark);
  font-weight: 600;
`;

interface IContainerNotFound {
  children: ReactNode;
  theme: string;
}

export const ContainerNotFound = styled.div<IContainerNotFound>`
  font-family: 'Ubuntu';
  color: ${({ theme }) =>
    theme === 'light' ? 'var(--blue-dark)' : 'var(--grey-light)'};
  font-weight: 600;
  min-height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
