import { createContext } from 'react';

type TPostContext = {
  showAvatar: boolean;
};

export const PostContext = createContext<TPostContext>({ showAvatar: true });
