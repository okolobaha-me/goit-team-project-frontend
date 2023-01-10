import { Button, Icon, Text } from './CongratulationsModal.styled';

import icons from '../../../images/svg/icons.svg';
import { ModalWrapper } from '../ModalWrapper';

const CongratulationsModal = ({ closeModal }) => {
    return (
        <>
            <ModalWrapper closeModal={closeModal} variant={'info'}>
                <Icon width="50" height="45">
                    <use href={`${icons}#icon-thumbUp`} />
                </Icon>
                <Text>
                    Вітаю! <br />
                    Ще одна книга прочитана.
                </Text>

                <Button variant={'accent'} onClick={closeModal}>
                    Готово
                </Button>
            </ModalWrapper>
        </>
    );
};

export default CongratulationsModal;
