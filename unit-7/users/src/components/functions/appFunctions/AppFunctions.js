import React, { useState, useEffect } from 'react';

import SearchUserFunc from '../searchUserFunc/SearchUserFunc';
import OutItemsFunc from '../outItemsFunc/OutItemsFunc';

import UserServiceFunctions from '../../../services/servicesFunctions/UserServicesFunctions';

export default function AppFunctions () {

  const [text, setText] = useState('')
  const [users, setUsers] = useState(null);

  /**
   * Когда компонент смонтирован получаем данные из UserServiceFunctions обрабатываем их и записываем в users
   */
  useEffect(() => {
    UserServiceFunctions.getUsers().then(users => {setUsers(users)})
  },[])


  /**
   * Текст который прилитает из компонента SearchUser мы записываем в this.state.text
   */
  const getSearchUser = (text) => setText(text);

  /**
   * Поиск user по вхождениям из text
   */
  const serarch = (text, user) => {

    if(user !== null) {

      return user.filter((us) => {

        if(text.length === 0) return user;

        return us.name.toLowerCase().indexOf(text.toLowerCase().trim()) > -1;

      })
    }
  };

    /**
     * Отфильтрованные users
     */
  const visibleUsers = serarch(text, users);

  return (

    <div className="container">
      <h2>App Functions</h2>
      {/* В SearchUser передаем функцию для получения текста из input */}
      <SearchUserFunc getSearchUser={getSearchUser} />
      {/* Передаем массив visibleUsers */}
      { (users !== null) ? (<OutItemsFunc users={visibleUsers}/>) : null}
    </div>

  )

};