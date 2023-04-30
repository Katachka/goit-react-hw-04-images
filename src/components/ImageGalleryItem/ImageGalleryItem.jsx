import PropTypes from 'prop-types';
import { useState } from 'react';
import {Modal} from '../Modal/Modal'
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  const [shownModal, setShownModal] = useState(false);

 const onModal = () => {
    setShownModal(prevState => !prevState);
  };

  const { webformatURL } = item;

return (
    <GalleryItem >
      <GalleryItemImage
        src={webformatURL}
        alt='img'
      onClick={onModal} />
      {shownModal && <Modal onClose={onModal} image={item} />}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
 item: PropTypes.object,
};