import { FC, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { getCommentsFetch } from '@/app/redux/slices/commentsSlice';
import { getCommentsState } from '@/app/selectors';
import { TComment } from '@/app/types/app.typings';

import { Loader } from '../Loader';

import './index.scss';

type TCommentProps = {
  comment: TComment;
};

const Comment: FC<TCommentProps> = ({ comment }) => {
  return (
    <Row className='flex-column'>
      <Col>
        <span className='comment__author'>{comment.email}</span>
      </Col>
      <Col>
        <span className='comment__text'>{comment.body}</span>
      </Col>
    </Row>
  );
};

type TCommentsList = {
  className?: string;
};

export const CommentsList: FC<TCommentsList> = ({ className }) => {
  const dispatch = useDispatch();
  const { entities: comments, loading, error } = useSelector(getCommentsState);

  useEffect(() => {
    dispatch(getCommentsFetch());
  }, [dispatch]);

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
        <ListGroup className={classNames('py-0', className)}>
          {comments.map((comment) => (
            <ListGroup.Item key={comment.id}>
              <Comment comment={comment} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};
