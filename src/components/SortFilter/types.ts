export type TSortDirection = 'asc' | 'desc' | null;

export type TFieldValue = Record<string, number | string>;

export type TSortFunc = (
  sortDir: TSortDirection,
  field: string
) => <T extends TFieldValue>(
  items: T[]
) => {
  isFiltred: boolean;
  filtredItems: T[];
};

export type TSortFuncReturn = ReturnType<TSortFunc>;
