import React, { Component } from 'react'
import axios from 'axios'

import { InputSearch, List } from './components'

import { isSearch } from './utils'

import './App.css'

export default class App extends Component {
  state = {
    users: null,
    searchKey: '',
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({ users: res.data }))
      .catch(e => console.log({ e }))
  }

  updateSearchKey = key => {
    this.setState({ searchKey: key })
  }

  render() {
    const { users, searchKey } = this.state
    const list = (users && isSearch(users, searchKey)) || []

    return (
      <div className="layout">
        <div className="card">
          <InputSearch
            onSearch={this.updateSearchKey}
            isLoading={!users}
            notFound={list.length === 0}
          />
          <List data={list} />
        </div>
      </div>
    )
  }
}
