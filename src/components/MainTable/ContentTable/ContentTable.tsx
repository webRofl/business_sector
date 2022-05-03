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
          <td className={classes.mainTable__id}>{user.id}</td>
          <td className={classes.mainTable__title}>{user.title}</td>
          <td className={classes.mainTable__body}>{user.body}</td>
        </tr>
      );
    });
  };

  return (
    <table>
      <tbody>
        {foundUsers.length ? uploadUsers(foundUsers) : uploadUsers(users)}
      </tbody>
    </table>
  );
};

export default ContentTable;
