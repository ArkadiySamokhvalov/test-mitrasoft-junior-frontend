import { ComponentPropsWithoutRef, FC } from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';

import { Icon } from '../Icon';

import './index.scss';

type TButtonIconProps = {
  icon: string;
  className?: string;
  onClick?: () => void;
} & ComponentPropsWithoutRef<'button'>;

export const ButtonIcon: FC<TButtonIconProps> = ({ icon, onClick, className, ...rest }) => {
  return (
    <Button
      variant='outline-light'
      className={classNames('btn-icon', className)}
      onClick={onClick}
      {...rest}>
      <Icon className='btn-icon__icon' icon={icon} />
    </Button>
  );
};
