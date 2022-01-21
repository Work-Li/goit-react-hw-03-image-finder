import './App.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from './components/ImageGallery/ImageGallery'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import PropTypes from 'prop-types';

// 24192544-a81042c0a59826e332cc4d72c
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

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
        <Toaster toastOptions={{ duration:2000 }}/>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchRequest={this.state.request}/>
        {/* {this.state.images && 
          ({this.state.images.map(image => (key={image.id} webformatURL={image.webformatURL} tags={image.tags} largeImageURL={image.largeImageURL}))}}) */}
        {/* {this.state.images && <div>{this.state.images.webformatURL}</div>} */}
      </div>
    );
  }
}
