type Color = 'red' | 'blue' | 'green' | 'white';

export interface ButtonProps<T> {
  backgroundColor: Color;
  textColor: Color;
  fontSize: number;
  pillShape?: boolean;
  padding: number[];
  children: React.ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  countValue?: T;
  countHistory?: T[];
};

// 1. Approach to receive prop types as CSS properties
// interface ButtonProps {
//   style: React.CSSProperties;
// };

// 2. Approach to receive prop types using Record to identify key and value types.
// interface ButtonProps {
//   borderRadius: Record<string, number>;
// };

// USAGE
  // borderRadius={{
  //   topLeft: 5,
  //   topRight: 5,
  //   bottomRight: 10,
  //   bottomLeft: 10,
  // }}

// 3. Approach to receive function props
// interface ButtonProps {
//   onClick: (test: string) => number;
// };

// USAGE
  // const onClick = (test: string) => {
  //   return 6;
  // };

// 4. Approach to receive children nodes
// interface ButtonProps {
//   children: React.ReactNode;
// };

// USAGE
  {/* <Button>Click me!<Button/> */}

// 5. Approach to receive JSX element
// interface ButtonProps {
//   children: JSX.Element;
// };

// USAGE
  // const icon = <i></i>;
  // <Button>{icon}<Button/>

// 6. Approach to receive attributes of a specific HTML element
// type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

// USAGE
  // <Button type='submit' autoFocus><Button/>

// 7. Approach to intersect a type alias
// type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
//   variant?: 'primary' | 'secondary';
// };

// 8. Approach to extend an interface
// interface ButtonProps {
//   type: 'button' | 'submit' | 'reset';
//   color: 'red' | 'blue' | 'green';
// };

// interface SuperButtonProps extends ButtonProps {
//   size: 'md' | 'lg';
// };