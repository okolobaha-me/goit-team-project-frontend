import icons from '../../../images/svg/icons.svg';
import { ModalWrapper } from '../ModalWrapper';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    ButtonWrapper,
    OrangeIcon,
    Text,
} from '../WellDoneModal/WellDoneModal.styled';

const TrainingFinishedModal = ({ closeModal }) => {
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
                <OrangeIcon width="50" height="45">
                    <use href={`${icons}#icon-thumbUp`} />
                </OrangeIcon>
                <Text>
                    Ти молодчина, <br />
                    Ти впорався з тренуванням!
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

export default TrainingFinishedModal;
