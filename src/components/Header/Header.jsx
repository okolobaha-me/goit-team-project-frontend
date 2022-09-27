import {useState} from 'react';
import {ModalWrapper} from '../ModalWrapper/ModalWrapper';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openExitModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <header>
                <p>LOGO</p>
                <button onClick={openExitModal}>exit</button>
            </header>

            {isModalOpen && (
                <ModalWrapper variant={'info'} closeModal={closeModal}>
                    exit
                </ModalWrapper>
            )}
        </>
    );
};
