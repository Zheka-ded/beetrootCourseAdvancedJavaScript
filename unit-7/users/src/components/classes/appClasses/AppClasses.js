import React from 'react';

import './AppClasses.css';

import OutItems from '../outItems/OutItems';
import SearchUser from '../searchUser/SearchUser';

import UserServiceClasses from '../../../services/servicesClasses/UserServiceClasses';

export default class AppClasses extends React.Component {

  /**
   * Создаем экземпляр класса
   */
  userData = new UserServiceClasses();

  constructor() {
    super();
    this.state = {
      users: null, // Начальное состояния массива пользователей
      text: '', // Начальное состояния текста полученного из компонента SearchUser
    }
  }

  /**
   * Когда компонент смонтирован вызываем this.getData()
   */
  componentDidMount() {
    this.getData()
  }
  /**
   * В getData прилитает ответ с сервера который мы отправили когда обращались к getUsers
   * И полученный ответ записываем в this.state.users
   */
  getData() {
    this.userData.getUsers().then(users => {this.setState({ users: users })})
  }
  /**
   * Текст который прилитает из компонента SearchUser мы записываем в this.state.text
   */
  getSearchUser = (text) => {
    this.setState({ text })
  }

  /**
   * Поиск user по вхождениям из text
   */
  serarch = (text, user) => {

    if(user !== null) {
      return user.filter((us) => {
        if(text.length === 0) return user;

        return us.name.toLowerCase().indexOf(text.toLowerCase().trim()) > -1;

      })
    }
  }
  
  render() {

    const { users, text } = this.state;

    /**
     * Отфильтрованные users
     */
    const visibleUsers = this.serarch(text, users);

    return (

      <div className="container">
        <h2>App Classes</h2>
        {/* В SearchUser передаем функцию для получения текста из input */}
        <SearchUser searchUser={this.getSearchUser}/>
        {/* Передаем массив visibleUsers */}
        { (users !== null) ? (<OutItems users={visibleUsers}/>) : null}
      </div>

    )

  }

}

