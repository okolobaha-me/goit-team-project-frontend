import {Button, ButtonWrapper, Text} from './ExitModal.styled';
import {ModalWrapper} from '../ModalWrapper';

const ExitModal = ({ closeModal }) => {
    const logout = () => {
        console.log('logout');
    };

    return (
        <>
            <ModalWrapper variant={'info'} closeModal={closeModal}>
                <Text>
                    Якщо Ви вийдете з програми незбережені дані будуть втрачені
                </Text>
                <ButtonWrapper>
                    <Button variant={'transparent'} onClick={closeModal}>
                        Відміна
                    </Button>
                    <Button variant={'accent'} onClick={logout}>
                        Вийти
                    </Button>
                </ButtonWrapper>
            </ModalWrapper>
        </>
    );
};

export default ExitModal;
