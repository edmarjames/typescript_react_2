import React from 'react';
import { ButtonProps } from '../utils/props';


export default function Button({
  backgroundColor,
  textColor,
  fontSize,
  pillShape,
  padding,
  children
}: ButtonProps) {

  return (
    <button style={{
      backgroundColor: backgroundColor,
      color: textColor,
      fontSize: fontSize,
      borderRadius: pillShape ? '100%' : 0,
      padding: `${padding[0]} ${padding[1]}`
    }}>
      {children}
    </button>
  )
}


// alternative way of providing prop types when using arrow function
// const Button: React.FC<> = () => {};


// alternative way of providing prop types without using interface
// export default function Button({
//   backgroundColor,
//   fontSize,
//   pillShape
// } : {
//   backgroundColor: string;
//   fontSize: number;
//   pillShape: boolean;
// }) {

//   return (
//     ...
//   )
// }
