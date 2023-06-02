import { FC } from 'react';
import sprite from '@assets/icons/sprite.svg';
import classNames from 'classnames';

type TIconProps = {
  icon: string;
  className?: string;
};

export const Icon: FC<TIconProps> = ({ icon, className }) => (
  <svg className={classNames('icon', className)} role='img'>
    <use href={`${sprite}#${icon}`} />
  </svg>
);
