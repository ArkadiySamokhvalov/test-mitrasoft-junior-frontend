import { FC, useContext, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { setCurrentPostId } from '@/app/redux/slices/commentsSlice';
import { getUserFetch, setCurrentUserId } from '@/app/redux/slices/userSlice';
import { TPost } from '@/app/types/app.typings';

import { Avatar } from '../Avatar';
import { CommentsList } from '../CommentsList';

import { PostContext } from './context';

import './index.scss';

type TPostProps = {
  post: TPost;
  className?: string;
};

export const Post: FC<TPostProps> = ({ post, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, userId, title, body } = post;
  const classes = classNames('post border border-light rounded p-3 p-md-4', className);
  const context = useContext(PostContext);
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
    setShowComments(!showComments);
    if (!showComments) {
      dispatch(setCurrentPostId(id));
    }
  };

  const handleShowUserProfile = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    dispatch(setCurrentUserId(userId));
    dispatch(getUserFetch());
    navigate('/profile');
  };

  return (
    <div className={classes}>
      {context.showAvatar && (
        <a onClick={handleShowUserProfile}>
          <Avatar className='mb-3 post__avatar' src='https://pngicon.ru/file/uploads/zhdun.png' />
        </a>
      )}

      <div className='text text-2 pl-md-4'>
        <div className='text-center mb-3'>
          <strong className='post__title h5 d-block mb-3'>{title}</strong>

          <p className='post__body'>{body}</p>
        </div>

        <Accordion className='post__toggle bg-dark text-light'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header onClick={handleShowComments}>Комментарии</Accordion.Header>
            <Accordion.Body className='p-0'>{showComments && <CommentsList />}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
