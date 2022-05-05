import axios from 'axios';
import { User } from '../types/types';

export type GetUsersResponse = {
  status: number;
  statusText: string;
  data: User[];
};

export const getUsers = (page: number): Promise<GetUsersResponse> => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
};

export const findUser = (str: string, page: number) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?q=${str}&_page=${page}&_limit=10`
  );
};
