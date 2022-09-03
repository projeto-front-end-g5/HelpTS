import React from "react";
import { Button } from './styles';



interface ButtonProps {
  text: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
}


const ButtonTag = ({text, height, onClick, width}: ButtonProps) => (
  <Button >
      <button 
        type='button' 
        style={{ height, width }}
        onClick={onClick}>
          {text}
      </button>
  </Button>
)

export default ButtonTag