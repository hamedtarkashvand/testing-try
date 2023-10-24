import { FC } from 'react'
import { iPropsGreet } from './greet.types';

export const Greet: FC<iPropsGreet> = ({name}) => {
  return (<h1>Hello {name ? name : 'greet'}</h1>);
};
