import { ReactNode } from 'react';
import styled from 'styled-components';

interface IContainer {
  children: ReactNode;
  backGroundColorContainerBlue: string;
  backGroundColorDark: string;
  theme: string;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  padding: 2rem;
  height: 5.5rem;
  background-color: ${({
    theme,
    backGroundColorDark,
    backGroundColorContainerBlue,
  }) =>
    theme === 'light' ? backGroundColorContainerBlue : backGroundColorDark};
  box-shadow: 0px 24px 19px -7px rgba(0, 0, 0, 0.3);
`;
