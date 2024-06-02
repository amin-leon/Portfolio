import { TypeAnimation } from 'react-type-animation';
 
export const Typing = () => {
  return (
<TypeAnimation
  sequence={['A', 5000, 'Fullstack', 500, 'Developer', 1000]}
  style={{ fontSize: '4em', fontWeight:'bold' }}
  repeat={Infinity}
/>
  );
};