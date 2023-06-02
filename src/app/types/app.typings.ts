type TLoading = 'idle' | 'pending' | 'fullfiled' | 'failed';

export type TStatus = {
  loading: TLoading;
  error: string | null;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type TPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type TPostsState = {
  entities: TPost[] | [];
} & TStatus;

export type TCommentsState = {
  currentPostId: number | null;
  entities: TComment[] | [];
} & TStatus;

export type TUserState = {
  currentUserId: number | null;
  user: TUser | Record<string, never>;
} & TStatus;
