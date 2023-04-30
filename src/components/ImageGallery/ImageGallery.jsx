import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer } from './ImageGallery.styled';


export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryContainer>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          item={item}
        />
      ))}
    </ImageGalleryContainer>
  );
}

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};