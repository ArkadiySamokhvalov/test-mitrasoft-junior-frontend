import { FC, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';

import { getUserPostsFetch } from '@/app/redux/slices/postsSlice';
import { getPostsState, getUserState } from '@/app/selectors';
import { Loader } from '@/components/Loader';

export const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { user, loading: userLoading, error: userError } = useSelector(getUserState);
  console.log('file: index.tsx:12 ~ user:', user);
  const {
    entities: posts,
    loading: postsLoading,
    error: postsError,
  } = useSelector(getPostsState);
  console.log('file: index.tsx:14 ~ posts:', posts);

  useEffect(() => {
    dispatch(getUserPostsFetch());
  }, [dispatch]);

  return (
    <>
      {userLoading === 'pending' ? (
        <Loader />
      ) : userLoading === 'failed' ? (
        <>
          <div className='mx-auto my-3'>Произошла ошибка!</div>
          <div className='mx-auto my-3'>{userError}</div>
        </>
      ) : user ? (
        <Card>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.name}</Card.Text>
          <Card.Text>{user.company.name}</Card.Text>
        </Card>
      ) : (
        <></>
      )}

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
              <Card.Text>{post.title}</Card.Text>
              <Card.Text>{post.body}</Card.Text>
            </Card>
          );
        })
      )}
    </>
  );
};
