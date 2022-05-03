import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../redux/store';
import { User } from '../../../types/types';
import classes from './ContentTable.module.css';

const ContentTable = () => {
  const users = useSelector((state: GlobalState) => state.users.users);

  const foundUsers = useSelector(
    (state: GlobalState) => state.users.foundUsers
  );

  const uploadUsers = (users: Array<User>) => {
    return users.map((user) => {
      return (
        <tr className={classes.mainTable__tr} key={user.id}>
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.body}</td>
        </tr>
      );
    });
  };

  return (
    <table>
      <tbody>
        {/* {foundUsers.length ? uploadUsers(foundUsers) : uploadUsers(users)} */}
        {uploadUsers(users)}
      </tbody>
    </table>
  );
};

export default ContentTable;
