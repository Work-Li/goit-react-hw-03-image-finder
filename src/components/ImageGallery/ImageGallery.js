import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import {fetchImages} from '../../services/api';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { BallTriangle } from  'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class ImageGallery extends Component { 
    state = {
        images: [],
        page: 1,
        error: null,
        loading: false,
    }

        componentDidUpdate(prevProps, prevState) {
            if(prevProps.request !== this.props.request) {
                this.setState({image: [], page: 1 });
            }

            fetchImages(this.props.request, this.state.page)
                .then(res => {
                    this.setState({
                        images: this.state.page === 1 ? res.hits : [...prevState.images, ...res.hits]
                    });
                })
                .catch(error => this.setState({error}))
                .finally(() => this.setState({loading: false}));            
        }

        onLoadMore = () => {
            this.setState(prevState => ({page: prevState.page +1}));
        };

        render() {
            return (
                {loading && <BallTriangle/>}
                <ul class="gallery">
                    {this.state.images.map(({ id, webformatURL, largeImageURL, tags, onOpenModal }) => (
                        <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        tags={tags}
                        onOpenModal={onOpenModal}
                        />
                    ))}
                </ul>

            );   
           
        }


}
