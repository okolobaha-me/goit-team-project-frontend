import { Icon, Text, ButtonWrapper, Button } from './WellDoneModal.styled';
import icons from '../../images/svg/icons.svg';
const WellDoneModal = ({ closeModal }) => {
    const goToNewTraining = () => {
        console.log('new training');
    };

    return (
        <>
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
        </>
    );
};

export default WellDoneModal;
