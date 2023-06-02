import { FC, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames';

import { TPost, TPostsState } from '@/app/types/app.typings';

import { Loader } from '../Loader';
import { Pagination } from '../Pagination';
import { createPaginationData } from '../Pagination/functions';
import { Post } from '../Post';
import { SearchBar } from '../SearchBar';

import './index.scss';

type TPostsBlockProps = {
  postsState: TPostsState;
  postsPerPage: number;
  className?: string;
};

export const PostsBlock: FC<TPostsBlockProps> = ({ postsState, postsPerPage, className }) => {
  const { entities: posts, loading, error } = postsState;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPosts, setCurrentPosts] = useState<TPost[]>([]);

  const { currentItems, pageCount, handlePageClick } = createPaginationData<TPost>(
    currentPosts,
    postsPerPage,
    itemOffset,
    setItemOffset
  );

  const handleSearch = (value = '') => {
    if (value === '') {
      setCurrentPosts(posts);

    } else {
      const newSearchedPosts = posts.filter(
        (post) => post.title.toString().toLowerCase().indexOf(value.toLowerCase()) > -1
      );

      setCurrentPosts(newSearchedPosts);
    }
  };

  useEffect(() => {
    setCurrentPosts(posts);
  }, [posts]);

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
            <div className='d-flex search-block'>
              <SearchBar className='flex-grow-1 me-2 me-md-3' onChange={handleSearch} />
            </div>
          </Col>

          <Col xl='8' md='10'>
            <Row className='gap-4 gap-lg-5'>
              {currentItems.length === 0 ? (
                <div className='text-center h5 mt-5'>Посты не найдены</div>
              ) : (
                currentItems.map((post) => {
                  return (
                    <Col xs='12' key={post.id}>
                      <Post post={post} />
                    </Col>
                  );
                })
              )}
            </Row>
          </Col>

          <Pagination
            className='d-inline-flex w-auto mb-0 p-0'
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </Row>
      )}
    </>
  );
};
