import React, { useRef, useEffect } from 'react';
import { ButtonProps } from '../utils/props';


export default function Button({
  backgroundColor,
  textColor,
  fontSize,
  pillShape,
  padding,
  children,
  setCount,
}: ButtonProps) {

  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event);
    console.log('clicked');
    setCount((prevCount) => prevCount + 1);
  };

  type User = {
    sessionId: string;
    name: string;
  };

  type Guest = Omit<User, 'name'>;

  type ButtonColor = 'red' | 'blue' | 'green';

  const buttonTextOptions = [
    'Click me!',
    'Click me again!',
    'Click me one more time!'
  ] as const;

  useEffect(() => {
    const previousButtonColor = localStorage.getItem('buttonColor') as ButtonColor;
  }, []);

  return (
    <>
      <button
        ref={ref}
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          fontSize: fontSize,
          borderRadius: pillShape ? '100%' : 0,
          padding: `${padding[0]} ${padding[1]}`
        }}
        onClick={handleClick}
      >
        {children}
      </button>
      <div>
        {buttonTextOptions.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
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
