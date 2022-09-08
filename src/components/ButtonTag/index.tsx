import React from 'react';
import { Button } from './styles';

interface ButtonProps {
  text: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  fontSize: string;
}

const ButtonTag = ({ text, height, onClick, width, fontSize }: ButtonProps) => (
  <Button>
    <button type='button' style={{ height, width, fontSize }} onClick={onClick}>
      {text}
    </button>
  </Button>
);

export default ButtonTag;
