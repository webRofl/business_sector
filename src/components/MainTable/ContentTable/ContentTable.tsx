import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../redux/store';
import classes from './ContentTable.module.css';

const ContentTable = () => {
  const users = useSelector((state: GlobalState) => state.users.users);

  const uploadUsers = () => {
    return users.map((user) => {
      return (
        <tr className={classes.mainTable__tr}>
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.body}</td>
        </tr>
      );
    });
  };

  return (
    <table>
      <tbody>{uploadUsers()}</tbody>
    </table>
  );
};

export default ContentTable;
