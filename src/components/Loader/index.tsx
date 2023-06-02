import { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Loader: FC = () => (
  <Spinner className='d-block mx-auto my-3' animation='border' variant='primary' />
);
