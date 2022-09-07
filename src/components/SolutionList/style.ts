import styled from 'styled-components';
import {  ButtonHTMLAttributes, ReactNode} from "react";

interface IContainer extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
  }
  
  export const Container = styled.div<IContainer> `

    
  `