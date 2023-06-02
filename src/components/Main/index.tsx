import { FC, ReactNode, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useLocation, useNavigate } from 'react-router';
import classNames from 'classnames';

import { ButtonIcon } from '../ButtonIcon';

import './index.scss';

type TMainProps = {
  className?: string;
  children?: ReactNode;
};

export const Main: FC<TMainProps> = ({ className, children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showTopBtn, setShowTopBtn] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavigateToRoot = () => {
    navigate('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <main className={classNames('main py-4 h-100', className)}>
      {pathname !== '/' && (
        <Container className='position-relative' fluid='lg'>
          <ButtonIcon
            className='main__btn main__btn_back'
            icon='arrow-left-short'
            onClick={handleNavigateToRoot}
            area-label='Вернуться назад'
          />
        </Container>
      )}

      {children}

      {showTopBtn && (
        <Container className='main__scroll' fluid='lg'>
          <ButtonIcon
            className='main__btn main__btn_scroll'
            icon='arrow-up-short'
            onClick={handleScrollToTop}
            area-label='Вернуться к верху страницы'
          />
        </Container>
      )}
    </main>
  );
};
