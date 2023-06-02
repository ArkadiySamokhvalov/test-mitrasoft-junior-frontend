import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Avatar } from '@/components/Avatar';
import { Main } from '@/components/Main';

export const AboutPage: FC = () => {
  return (
    <Main>
      <section className='user-info mb-4'>
        <Container fluid='lg'>
          <Row className='justify-content-center align-items-center'>
            <Col xl='8' md='10'>
              <Card className='profile bg-dark text-light border-light'>
                <Row className='g-0 align-items-center p-3 p-md-4'>
                  <Col xs='12' md='4' className='justify'>
                    <Avatar
                      className='profile__avatar avatar_no-hover'
                      src='https://avatars.githubusercontent.com/u/50407825?v=4'
                    />
                  </Col>

                  <Col xs='12' md='8'>
                    <Card.Body className='p-0'>
                      <Card.Text className='h3'></Card.Text>

                      <Row className='pt-1 justify-content-between'>
                        <Col sm='12' className='mb-3 mb-md-0'>
                          <Card.Text>
                            Работал в веб-студии, занимался в основном версткой и доработкой сайтов
                            на различных CMS. Осознал, что не расту профессионально. Выбрал для себя
                            frontend-направление и последние 6 месяцев обучался. Параллельно немного
                            фрилансил, поэтому умею строить распорядок дня и фокусироваться на
                            работе. В свободное время подтягиваю английский и изучаю новые для меня
                            инструменты.
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Main>
  );
};
