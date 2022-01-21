import React from "react";
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

 const ImageGalleryItem = ({ id, tags, webformatURL, largeImageURL, onOpenModal }) => {
    return ( 
    
        <li class="gallery-item" key={id} className={s.imageGalleryItem }>
            <img src={webformatURL} alt={tags} data-source={largeImageURL} onClick={onOpenModal} className={s.imageGalleryItem__image} />
        </li>
       
    )
}
    


ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    onOpenModal: PropTypes.func,
};

export default ImageGalleryItem;