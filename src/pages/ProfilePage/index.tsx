import { FC, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';

import { getUserPostsFetch } from '@/app/redux/slices/postsSlice';
import { getPostsState, getUserState } from '@/app/selectors';
import { Avatar } from '@/components/Avatar';
import { Loader } from '@/components/Loader';
import { Main } from '@/components/Main';
import { PostContext } from '@/components/Post/context';
import { PostsBlock } from '@/components/PostsBlock';

import './index.scss';

export const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(getUserState);
  const postsState = useSelector(getPostsState);

  useEffect(() => {
    dispatch(getUserPostsFetch());
  }, [dispatch]);

  return (
    <Main>
      <section className='user-info mb-4'>
        <Container fluid='lg'>
          <Row className='justify-content-center align-items-center'>
            <Col xl='8' md='10'>
              <Card className='profile bg-dark text-light border-light'>
                {loading === 'pending' ? (
                  <Loader />
                ) : loading === 'failed' ? (
                  <>
                    <div className='mx-auto my-3'>Произошла ошибка!</div>
                    <div className='mx-auto my-3'>{error}</div>
                  </>
                ) : (
                  loading === 'fullfiled' && (
                    <Row className='g-0 align-items-center p-3 p-md-4'>
                      <Col xs='12' md='4' className='justify'>
                        <Avatar
                          className='profile__avatar avatar_no-hover'
                          src='https://pngicon.ru/file/uploads/zhdun.png'
                        />
                      </Col>

                      <Col xs='12' md='8'>
                        <Card.Body className='p-0'>
                          <Card.Text className='h3'>{user.name}</Card.Text>
                          <hr className='mt-0 mb-4' />

                          <Row className='pt-1 justify-content-between'>
                            <Col sm='6' className='mb-3 mb-md-0'>
                              <Card.Subtitle className='h6 mb-1'>Компания</Card.Subtitle>
                              <Card.Text className='text-muted'>{user.company?.name}</Card.Text>
                            </Col>

                            <Col sm='6'>
                              <Card.Subtitle className='h6 mb-1'>Email</Card.Subtitle>
                              <Card.Text className='text-muted'>{user.email}</Card.Text>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Col>
                    </Row>
                  )
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='posts'>
        <Container fluid='lg'>
          <Row className='justify-content-center align-items-center'>
            <Col xl='8' md='10'>
              <div className='h3 mb-3'>Посты пользователя:</div>
            </Col>
          </Row>

          <PostContext.Provider value={{ showAvatar: false }}>
            <PostsBlock postsState={postsState} postsPerPage={5}/>
          </PostContext.Provider>
        </Container>
      </section>
    </Main>
  );
};
