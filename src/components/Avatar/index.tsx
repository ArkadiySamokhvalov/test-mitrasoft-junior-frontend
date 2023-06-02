import { FC } from 'react';
import Image from 'react-bootstrap/Image';
import classNames from 'classnames';

import './index.scss';

type TAvatarProps = {
  src: string;
  className?: string;
};

export const Avatar: FC<TAvatarProps> = ({ src, className }) => {
  const classes = classNames('avatar', className);

  return <Image className={classes} src={src} roundedCircle />;
};
