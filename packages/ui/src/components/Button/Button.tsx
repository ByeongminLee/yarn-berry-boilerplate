import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      style={{
        padding: '10px 30px',
        border: '1px solid #fefefe',
        background: '#333',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
