import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';

import { getPostsFetch } from '@/app/redux/slices/postsSlice';
import { getPostsState } from '@/app/selectors';
import { Main } from '@/components/Main';
import { PostsBlock } from '@/components/PostsBlock';

export const MainPage = () => {
  const dispatch = useDispatch();
  const postsState = useSelector(getPostsState);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  return (
    <Main>
      <section>
        <Container fluid='lg'>
          <PostsBlock postsState={postsState} postsPerPage={10}/>
        </Container>
      </section>
    </Main>
  );
};
