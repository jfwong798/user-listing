import React, { Component } from 'react'

export default class InputSearch extends Component {
  state = {
    searchKey: '',
  }

  updateSearchKey = () => {
    const { onSearch } = this.props

    onSearch(this.state.searchKey)
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState(
      () => {
        return { [name]: value }
      },
      () => this.updateSearchKey(),
    )
  }

  clearSearchKey = () =>
    this.setState(
      () => {
        return { searchKey: '' }
      },
      () => this.updateSearchKey(),
    )

  render() {
    const { searchKey } = this.state
    const { isLoading, notFound } = this.props

    return (
      <div className="search-input">
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            name="searchKey"
            value={searchKey}
            placeholder="Enter Search Key..."
            autoFocus
            onChange={this.handleChange}
          />
          {searchKey && (
            <i
              className="fas fa-times-circle input-reset"
              onClick={this.clearSearchKey}
            />
          )}
        </div>
        {!isLoading && notFound && (
          <div className="search-result-text">No Data Found!</div>
        )}
      </div>
    )
  }
}
