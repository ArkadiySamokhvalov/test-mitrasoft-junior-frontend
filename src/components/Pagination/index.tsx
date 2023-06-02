import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';

import { Icon } from '../Icon';

import './index.scss';

type TPaginationProps = {
  pageCount: number;
  handlePageClick: (selecteditem: { selected: number }) => void;
  className?: string;
};

export const Pagination: FC<TPaginationProps> = ({ className, pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      onPageChange={handlePageClick}
      pageCount={pageCount}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      breakLabel='...'
      previousLabel={<Icon icon='arrow-left-short' />}
      nextLabel={<Icon icon='arrow-left-short' />}
      renderOnZeroPageCount={null}
      className={classNames('pagination', className)}
      pageClassName='page-item'
      previousClassName='page-item'
      nextClassName='page-item'
      activeClassName='active'
      breakClassName='page-item'
      breakLinkClassName='btn text-light disabled border-0'
      disabledClassName='disabled'
      activeLinkClassName='active'
      disabledLinkClassName='disabled'
      pageLinkClassName='pagination__link btn btn-icon btn-outline-light d-flex justify-content-center align-items-center'
      previousLinkClassName='pagination__link pagination__link_prev btn btn-icon btn-outline-light d-flex justify-content-center align-items-center'
      nextLinkClassName='pagination__link pagination__link_next btn btn-icon btn-outline-light d-flex justify-content-center align-items-center'
    />
  );
};
