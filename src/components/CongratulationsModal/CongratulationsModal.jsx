import { Icon, Text, Button } from './CongratulationsModal.styled';

import icons from '../../images/svg/icons.svg';

const CongratulationsModal = ({ closeModal }) => {
    return (
        <>
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
        </>
    );
};

export default CongratulationsModal;
