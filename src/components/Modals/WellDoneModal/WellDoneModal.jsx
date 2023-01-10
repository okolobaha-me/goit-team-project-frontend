import { Button, ButtonWrapper, Icon, Text } from './WellDoneModal.styled';
import icons from '../../../images/svg/icons.svg';
import { ModalWrapper } from '../ModalWrapper';
import { useNavigate } from 'react-router-dom';

const WellDoneModal = ({ closeModal }) => {
    const goToNewTraining = () => {
        document.location.reload();
    };

    const navigate = useNavigate();

    const finishTraining = () => {
        navigate('../library');
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
                    <Button variant={'accent'} onClick={finishTraining}>
                        Назад
                    </Button>
                </ButtonWrapper>
            </ModalWrapper>
        </>
    );
};

export default WellDoneModal;
