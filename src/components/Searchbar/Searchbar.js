import { Component } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    request: '',
  };

  handleRequestChange = e => {
    this.setState({ request: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.request.trim() === '') {
      toast.error('Please, enter request')
      return;
    }
    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <>
        <header className={s.searchbar}>
          <form className={s.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.searchBtn}>
              <span className={s.searchLabel}>Search</span>
            </button>

            <input
              className={s.searchInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.request}
              onChange={this.handleRequestChange}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};