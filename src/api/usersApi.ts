import axios from 'axios';
import { User } from '../types/types';

type GetUsersResponse = {
  status: number;
  statusText: string;
  data: Array<User>;
};

export const getUsers = (page: number): Promise<GetUsersResponse> => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
};
