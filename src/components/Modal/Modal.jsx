import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, image }) => {
 
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
    
    const handleClickBackdrop = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    const { largeImageURL } = image;
  
    return createPortal(
        <Backdrop onClick={handleClickBackdrop}>
            <ModalContainer>
            
                <img
                    src={largeImageURL}
                    alt='img'
                    loading="lazy"
                />
            </ModalContainer>
        </Backdrop>,
        modalRoot
    );
};


Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};