import { ChangeEvent, FC, FormEvent, useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import classNames from 'classnames';
import debounce from 'lodash.debounce';

import { Icon } from '../Icon';

import './index.scss';

type TSearchBarProps = {
  onChange: (value: string) => unknown;
  className?: string;
};

export const SearchBar: FC<TSearchBarProps> = ({ onChange, className }) => {
  const [value, setValue] = useState('');
  const debounceFn = useMemo(() => debounce(handleDebounceFn, 1000), []);

  function handleDebounceFn(value: string) {
    onChange(value);
  }

  const handleChange = (event: ChangeEvent) => {
    const { value } = event.currentTarget as HTMLInputElement;

    setValue(value);
    debounceFn(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form className={classNames('search', className)} onSubmit={(e) => handleSubmit(e)}>
      <InputGroup className='h-100'>
        <InputGroup.Text className='search__icon bg-dark text-light border-end-0 justify-content-center h-100'>
          <Icon icon='search' className='w-100 h-100' />
        </InputGroup.Text>

        <FormControl
          type='search'
          className='bg-dark text-light border-start-0 flex-grow-1'
          placeholder='Найти пост...'
          onChange={handleChange}
          value={value}
        />
      </InputGroup>
    </Form>
  );
};
