import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { EmptyLibrary } from '../EmptyLibrary/EmptyLibrary';
import { EmptyLibraryModal } from '../EmptyLibraryModal/EmptyLibraryModal';
import { useState } from 'react';
import { ModalBtn } from '../EmptyLibrary/ModalBtn';

export const Layout = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <Header />
            <ModalBtn toggleModal={toggleModal}/>
            {showModal &&<EmptyLibraryModal onClose={toggleModal}>
            <EmptyLibrary/>
            </EmptyLibraryModal>}
            <Outlet />
        </>
    );
};
