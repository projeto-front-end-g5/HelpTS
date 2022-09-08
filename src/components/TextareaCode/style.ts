import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IDivCode extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export const DivCode = styled.div<IDivCode>`
  width: 100%;
  height: 100%;
`;
