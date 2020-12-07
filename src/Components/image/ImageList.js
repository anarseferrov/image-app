import React from 'react';
import './image.css'
import Image from './Image'

const ImageList = ({ images }) => {

    const preparedimageslist = images.map(image => {
        return (
            <Image image={image}  key={image.id}/>
        )
    })
    return (
        <div className="image-list-container">
            {preparedimageslist}
        </div>
    )
}

export default ImageList;