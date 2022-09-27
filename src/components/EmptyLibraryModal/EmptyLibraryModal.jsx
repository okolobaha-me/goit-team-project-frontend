import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const EmptyLibraryModal = ({ children, onClose }) => {
//     const [showModal, setShowModal] = useState(false);

//    const toggleModal = () => {
//         setShowModal(!showModal);
//     };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            onClose();
        }
    };

    const backdropKeyDow = evt => {
        if (evt.currentTarget === evt.target) {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return createPortal(
        // <button type="button" onClick={toggleModal}>Modal</button>
        <div onClick={backdropKeyDow}>
            <div>{children}</div>
        </div>,
        modalRoot
    );
};
