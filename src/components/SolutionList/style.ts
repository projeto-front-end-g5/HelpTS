import styled from 'styled-components';
import {  ButtonHTMLAttributes, ReactNode} from "react";

interface ISecondContainer extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
  }
  
  export const SecondContainer = styled.div<ISecondContainer> `

    
  `

export const Container = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
