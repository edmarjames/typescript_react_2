import React, { useRef, useEffect } from 'react';
import { ButtonColor } from '../utils/types';
import { ButtonProps } from '../utils/props';
import { buttonTextOptions } from '../utils/constants';


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
