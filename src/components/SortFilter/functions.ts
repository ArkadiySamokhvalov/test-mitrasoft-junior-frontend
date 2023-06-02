import cloneDeep from 'lodash.clonedeep';

import { TFieldValue, TSortDirection, TSortFunc } from './types';

export const byField = (field: string, sortDir: TSortDirection) => {
  return (a: TFieldValue, b: TFieldValue) => {
    if (sortDir === 'desc') {
      return a[field] > b[field] ? 1 : -1;
    }

    return a[field] < b[field] ? 1 : -1;
  };
};

export const filterFunc: TSortFunc = (sortDir, field) => (items) => {
  if (!sortDir) {
    return {
      isFiltred: false,
      filtredItems: items,
    };
  }

  const itemsClone = cloneDeep(items);
  itemsClone.sort(byField(field, sortDir));

  return {
    isFiltred: true,
    filtredItems: itemsClone,
  };
};
