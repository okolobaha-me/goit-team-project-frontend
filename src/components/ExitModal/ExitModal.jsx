import { Text, Button, ButtonWrapper } from './ExitModal.styled';

const ExitModal = ({ closeModal }) => {
    const logout = () => {
        console.log('logout');
    };

    return (
        <>
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
        </>
    );
};

export default ExitModal;
