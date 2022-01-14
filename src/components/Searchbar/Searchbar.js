import { Component } from 'react/cjs/react.production.min';

export default class Searchbar extends Component {
  state = {
    request: '',
  };

  handleRequestChange = e => {
    this.setState({ request: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <>
        <header class="searchbar">
          <form class="form" onSubmit={this.handleSubmit}>
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
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
