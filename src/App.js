import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
// import

// import PropTypes from 'prop-types';

// 24192544-a81042c0a59826e332cc4d72c

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    request: '',
  };
  handleFormSubmit = request => {
    this.setState({ request });
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=24192544-a81042c0a59826e332cc4d72c&image_type=photo&orientation=horizontal&per_page=12',
    )
      .then(res => res.json())
      .then(images => this.setState({ images }))
      .finally(() => this.setState({ loading: false }));
    // (images => this.setState({ images }));
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* {this.state.images && 
          ({this.state.images.map(image => (key={image.id} webformatURL={image.webformatURL} tags={image.tags} largeImageURL={image.largeImageURL}))}}) */}
        {/* {this.state.images && <div>{this.state.images.webformatURL}</div>} */}
      </div>
    );
  }
}
