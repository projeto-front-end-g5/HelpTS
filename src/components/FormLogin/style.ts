import styled from 'styled-components';
import { FormHTMLAttributes, ReactNode } from 'react';

export const ContainerFormLogin = styled.div`
  width: 50%;
  height: 500px;
`;

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const FormLogin = styled.form<IFormProps>`
  width: 100%;
  height: 100%;
`;
