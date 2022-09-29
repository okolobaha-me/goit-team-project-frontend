import {Button, ButtonWrapper, Icon, Text} from './WellDoneModal.styled';
import icons from '../../../images/svg/icons.svg';
import {ModalWrapper} from '../ModalWrapper/ModalWrapper';

const WellDoneModal = ({ closeModal }) => {
    const goToNewTraining = () => {
        console.log('new training');
    };

    return (
        <>
            <ModalWrapper closeModal={closeModal} variant={'info'}>
                <Icon width="50" height="45">
                    <use href={`${icons}#icon-thumbUp`} />
                </Icon>
                <Text>
                    Ти молодчина, <br />
                    але потрібно швидше! <br />
                    Наступного разу тобі все вдасться)
                </Text>
                <ButtonWrapper>
                    <Button variant={'tranparent'} onClick={goToNewTraining}>
                        Нове тренування
                    </Button>
                    <Button variant={'accent'} onClick={closeModal}>
                        Назад
                    </Button>
                </ButtonWrapper>
            </ModalWrapper>
        </>
    );
};

export default WellDoneModal;
