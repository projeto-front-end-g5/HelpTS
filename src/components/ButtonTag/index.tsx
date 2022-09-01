import React from "react";
import { Container } from './styles';



interface ButtonProps {
  text: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}


const Button = ({text, height, onClick, width}: ButtonProps) => (
  <Container >
      <button 
        type='button' 
        style={{ height, width }}
        onClick={onClick}>
          {text}
      </button>
  </Container>
)

export default Button