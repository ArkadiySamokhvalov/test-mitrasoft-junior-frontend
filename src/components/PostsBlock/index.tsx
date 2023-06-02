import { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames';

import { TPostsState } from '@/app/types/app.typings';

import { Loader } from '../Loader';
import { Post } from '../Post';

import './index.scss';

type TPostsBlockProps = {
  postsState: TPostsState;
  className?: string;
};

export const PostsBlock: FC<TPostsBlockProps> = ({ postsState, className }) => {
  const { entities: posts, loading, error } = postsState;

  return (
    <>
      {loading === 'pending' ? (
        <Loader />
      ) : loading === 'failed' ? (
        <>
          <div className='mx-auto my-3'>Произошла ошибка!</div>
          <div className='mx-auto my-3'>{error}</div>
        </>
      ) : (
        <Row className={classNames('d-flex flex-column align-items-center gap-4', className)}>
          <Col xl='8' md='10'>
            <Row className='gap-4 gap-lg-5'>
              {posts.length === 0 ? (
                <div className='text-center h5 mt-5'>Посты не найдены</div>
              ) : (
                posts.map((post) => {
                  return (
                    <Col xs='12' key={post.id}>
                      <Post post={post} />
                    </Col>
                  );
                })
              )}
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};
