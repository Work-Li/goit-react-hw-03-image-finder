import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

 const ImageGallery = ({images, onOpenModal}) => {
    return (
        <ul className={s.imageGallery}>
            {images.map(({ id, tags, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    tags={tags}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    onOpenModal={onOpenModal}
                />
            ))}
        </ul>
    )
    
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape),
    onOpenModal: PropTypes.func,
  };

export  default ImageGallery;