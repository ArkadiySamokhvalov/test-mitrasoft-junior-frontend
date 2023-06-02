import { FC, MouseEvent, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { Avatar } from '../../components/Avatar';
import { ButtonIcon } from '../ButtonIcon';

export const Header: FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNavigate = (e: MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    setShow(!show);
  };

  return (
    <header className='sticky-top shadow-sm header'>
      <Navbar bg='dark' variant='dark' expand='md'>
        <Container fluid='lg'>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Navbar.Brand>
              <Link className='text-light h4' to={'/'}>
                МитраСофт тест
              </Link>
            </Navbar.Brand>

            <ButtonIcon
              icon='list'
              className='collapsed'
              aria-label='Открыть меню'
              aria-controls='offcanvasBottom'
              onClick={handleShow}
            />
          </div>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header>
              <ButtonIcon
                icon='x'
                className='ms-auto'
                onClick={handleClose}
                aria-label='Закрыть меню'
              />
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Row className='flex-column align-items-center'>
                <a onClick={(e) => handleNavigate(e, '/about')}>
                  <Avatar
                    className='header__avatar w-25 h-25 p-0 ms-auto me-auto mb-3'
                    src='https://avatars.githubusercontent.com/u/50407825?v=4'
                  />
                </a>
                <Navbar.Text className='text-center text-secondary h5'>
                  Аркадий Самохвалов
                </Navbar.Text>
                <Navbar.Text className='text-center h5'>arkady.samokhvalov@bk.ru</Navbar.Text>
              </Row>
              <hr className='mt-3' />

              <Nav className='justify-content-end flex-grow-1 gap-3 text-center'>
                <Nav.Item>
                  <Navbar.Text className='d-block d-md-inline-block w-100'>
                    <a
                      className={classNames('d-block w-100 h5 mb-0', {
                        'text-primary': pathname === '/',
                      })}
                      onClick={(e) => handleNavigate(e, '/')}>
                      Список постов
                    </a>
                  </Navbar.Text>
                </Nav.Item>

                <Nav.Item>
                  <Navbar.Text className='d-block d-md-inline-block w-100'>
                    <a
                      className={classNames('d-block w-100 h5 mb-0', {
                        'text-primary': pathname === '/about',
                      })}
                      onClick={(e) => handleNavigate(e, '/about')}>
                      Обо мне
                    </a>
                  </Navbar.Text>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};
