import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import { ButtonIcon } from '../ButtonIcon';

import { TSortDirection } from './types';

type TSortFilterProps = {
  toggle: boolean;
  onClick: (dir: TSortDirection) => void;
  icons: string[];
  className?: string;
};

export const SortFilter: FC<TSortFilterProps> = ({ icons, toggle, onClick, className }) => {
  const [counter, setCounter] = useState(0);
  const [icon, setIcon] = useState(icons[0]);

  const handleSort = () => {
    const newCounter = counter < 2 ? counter + 1 : 0;
    setCounter(newCounter);
    let sortDir: TSortDirection = null;

    switch (newCounter) {
      case 0:
        sortDir = null;
        break;
      case 1:
        sortDir = 'desc';
        setIcon(icons[0]);
        break;
      case 2:
        sortDir = 'asc';
        setIcon(icons[1]);
        break;
    }

    onClick(sortDir);
  };

  useEffect(() => {
    if (!toggle) {
      setCounter(0);
    }
  }, [toggle])

  return (
    <ButtonIcon
      className={classNames(className, { 'text-muted': counter === 0 })}
      onClick={handleSort}
      icon={icon}
    />
  );
};
