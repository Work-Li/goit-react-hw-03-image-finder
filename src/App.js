
import React, { Component } from 'react';
import fetchImages from './services/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Spinner from './components/Loader/Loader';
import Modal from './components/Modal/Modal'
import toast, { Toaster } from 'react-hot-toast';



class App extends Component {
  state = {
    request: '',
    images: [],
    page: 1,
    status: 'idle',
    showBtn: false,
    showModal: false,
    selectedImage: '',
    
  };
  handleFormSubmit = request => {
    this.setState({ request });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImage = prevState.request;
    const nextImage = this.state.request;

    if (prevImage !== nextImage) {
      this.setState({ status: 'pending' });

      fetchImages(nextImage, 1)
        .then(data => {
          if (data.total === 0) {
            toast.error(`No images for ${nextImage}`);
            return;
          } else {
            this.setState({ images: data.hits, status: 'resolved', page: prevState.page + 1, showBtn: true });
          }
        })
        .catch(error => toast.error('Something wrong'));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onOpenModal = event => {
    this.setState({ selectedImage: event.target.dataset.source });
    this.toggleModal();
  };

  onLoadMoreClick = e => {
    const nextImage = this.state.request;
    const page = this.state.page;

    fetchImages(nextImage, page).then(data =>
      this.setState(prevState => {
        return {
          page: prevState.page + 1,
          images: [...prevState.images, ...data.hits],
          status: 'resolved',
        };
      }),
    );

  };

  render() {
    const { request, images, status, showBtn, showModal, selectedImage } = this.state;

    return (
      <>
        <Toaster />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && <p>'Please, enter request'</p>}
        {status === 'pending' && <Spinner />}
        {status === 'resolved' && <ImageGallery images={images} onOpenModal={this.onOpenModal} /> }
        {showBtn && <Button onClick={this.onLoadMoreClick}/>}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={selectedImage} alt={request} width="800" />
          </Modal>)}
        {console.log(images)  }


      </>  
    )
  }


}
export default  App;