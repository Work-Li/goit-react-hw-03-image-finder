import React from "react";
import PropTypes from 'prop-types';

export default function ImageGalleryItem ({  webformatURL, largeImageURL, tags, onOpenModal }) {
    return ( 
        <li class="gallery-item">
            <img src={webformatURL} alt={tags} data-source={largeImageURL} onClick={onOpenModal} />
        </li>
    )
}
    


ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    onOpenModal: PropTypes.func,
};