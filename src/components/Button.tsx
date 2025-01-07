import React from 'react';

type Color = 'red' | 'blue' | 'green' | 'white';

interface ButtonProps {
  backgroundColor: Color;
  textColor: Color;
  fontSize: number;
  pillShape?: boolean;
  padding: number[];
  children: React.ReactNode;
};

// Approach to receive prop types as CSS properties
// interface ButtonProps {
//   style: React.CSSProperties;
// };

// Approach to receive prop types using Record to identify key and value types.
// interface ButtonProps {
//   borderRadius: Record<string, number>;
// };

// borderRadius={{
//   topLeft: 5,
//   topRight: 5,
//   bottomRight: 10,
//   bottomLeft: 10,
// }}

// Approach to receive function props
// interface ButtonProps {
//   onClick: (test: string) => number;
// };

// const onClick = (test: string) => {
//   return 6;
// };

// Approach to receive children nodes
// interface ButtonProps {
//   children: React.ReactNode;
// };

{/* <Button>Click me!<Button/> */}

// Approach to receive JSX element
// interface ButtonProps {
//   children: JSX.Element;
// };

// const icon = <i></i>;
// <Button>{icon}<Button/>

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
