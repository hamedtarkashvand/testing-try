import { FC } from 'react'
interface iPropsGreet {
    name?:string
}
export const Greet: FC<iPropsGreet> = ({name}) => {
  return (<h1>Hello {name}</h1>);
};
