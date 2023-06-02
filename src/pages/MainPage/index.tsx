import { FC, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCommentsFetch, setCurrentPostId } from '@/app/redux/slices/commentsSlice';
import { getPostsFetch } from '@/app/redux/slices/postsSlice';
import { getUserFetch, setCurrentUserId } from '@/app/redux/slices/userSlice';
import { getCommentsState, getPostsState } from '@/app/selectors';
import { Loader } from '@/components/Loader';

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    entities: comments,
    loading: commentsLoading,
    error: commentsError,
  } = useSelector(getCommentsState);
  console.log('file: index.tsx:12 ~ comments:', comments);

  const { entities: posts, loading: postsLoading, error: postsError } = useSelector(getPostsState);
  console.log('file: index.tsx:12 ~ posts:', posts);

  const handleShowUserProfile = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    userId: number
  ) => {
    e.preventDefault();

    dispatch(setCurrentUserId(userId));
    dispatch(getUserFetch());
    navigate('/profile');
  };

  const handleShowComments = (id: number) => {
    dispatch(setCurrentPostId(id));
    dispatch(getCommentsFetch());
  };

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  return (
    <>
      {postsLoading === 'pending' ? (
        <Loader />
      ) : postsLoading === 'failed' ? (
        <>
          <div className='mx-auto my-3'>Произошла ошибка!</div>
          <div className='mx-auto my-3'>{postsError}</div>
        </>
      ) : posts.length === 0 ? (
        <div className='text-center h5 mt-5'>Посты не найдены</div>
      ) : (
        posts.map((post) => {
          return (
            <Card key={post.id}>
              <a onClick={(e) => handleShowUserProfile(e, post.userId)}>
                <Card.Img src='https://avatars.mds.yandex.net/i?id=3e65acecf112e727e9adfea647ff0423b0eb0274-7761117-images-thumbs&n=13' />
              </a>
              <Card.Text>{post.title}</Card.Text>
              <Card.Text>{post.body}</Card.Text>

              <Accordion className='post__toggle bg-dark text-light'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header onClick={() => handleShowComments(post.id)}>
                    Комментарии
                  </Accordion.Header>
                  <Accordion.Body className='p-0'>
                    {commentsLoading === 'pending' ? (
                      <Loader />
                    ) : commentsLoading === 'failed' ? (
                      <>
                        <div className='mx-auto my-3'>Произошла ошибка!</div>
                        <div className='mx-auto my-3'>{commentsError}</div>
                      </>
                    ) : (
                      <ListGroup className='py-0'>
                        {comments.map((comment) => (
                          <ListGroup.Item key={comment.id}>
                            <div className='mx-auto my-3'>{comment.email}</div>
                            <div className='mx-auto my-3'>{comment.body}</div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          );
        })
      )}
    </>
  );
};
