import { FC } from "react"
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return <>
    <Link to='/'>Главная</Link>
    <Link to='/about'>Обо мне</Link>
    <Link to='/profile'>Профиль</Link>
  </>
}
