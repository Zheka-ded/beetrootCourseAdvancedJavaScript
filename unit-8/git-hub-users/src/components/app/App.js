import React from 'react';
import Cartlist from '../cartlist/Cartlist';
import Form from '../form/Form';

import './App.css';

const data = [
  {id: 1, name: 'Dan Abramov', login: 'gaearon',  avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4'},
  {id: 2, name: 'Sophie Alpert', login: 'sophiebits', avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4'},
  {id: 3, name: 'Brian Vaughn', login: 'bvaughn', avatar_url: 'https://avatars2.githubusercontent.com/u/199471?v=4'},
];

export default class App extends React.Component{
  state = {
    data: data,
  };

  addUser = async (userName) => {
    const url = `https://api.github.com/users/${userName}`;
    const response = await fetch(url);
    const user = await response.json();
    return user.id ? this.setState({data: [...this.state.data, user] }) : (null, console.log('This user does not exist')) ;
  }

  /**
   * Пробрасываю эту функцию в компонент Cart от туда передаю user.id, а тут с помощью фильтр происходит магия)))
   * хотя можно было и передать в Cart массив data, там все делать и обновлять массив,
   * но если сдесь добавляют пользователей то почему бы и не удалять их тоже сдесь
   */
  removeUser = (userId) => {
    this.setState({ data: this.state.data.filter(user => user.id !== userId) })
  }

  render(){
    return(
      <div className="container">
        <Form submit={this.addUser} />
        <Cartlist data={this.state.data} removeUser={this.removeUser} />
      </div>
    )
  }
}
