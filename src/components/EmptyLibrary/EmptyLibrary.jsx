// import { useSelector } from "react-redux";
// import { useState } from 'react';
import { List, ListItem, Box, Title, StepText, StepTexIcon, StepDescr, StepDescrIcon } from './EmptyLibrary.styled';
import icons from '../../images/svg/icons.svg';

export const EmptyLibrary = () => {
    // const isOpen = useSelector(state => state.showModal);
    //  const [showModal, setShowModal] = useState(false);
    // console.log(showModal)
    //     const toggleModal = () => {
    //         setShowModal(!showModal);
    //     };
    return (
        <Box>
            <List>
                <ListItem>
                    <Title>Крок 1.</Title>
                    <StepText>
                        
                            <StepTexIcon width="22" height="17">
                                <use href={`${icons}#icon-book`} />
                            </StepTexIcon>
                        Створіть особисту бібліотеку
                    </StepText>
                    <StepDescr>
                    <StepDescrIcon width="10" height="12">
                                <use href={`${icons}#icon-perpendicularArrow`} />
                            </StepDescrIcon>
                     Додайте до неї книжки, які маєте намір прочитати.</StepDescr>
                </ListItem>
                <ListItem>
                    <Title>Крок 2.</Title>
                    <StepText>
                            <StepTexIcon width="15" height="17">
                                <use href={`${icons}#icon-flag`} />
                            </StepTexIcon> Сформуйте своє перше тренування
                            </StepText>
                    <StepDescr>
                    <StepDescrIcon width="10" height="12">
                                <use href={`${icons}#icon-perpendicularArrow`} />
                            </StepDescrIcon>
                        Визначте ціль, оберіть період, розпочинайте тренування.
                    </StepDescr>
                </ListItem>
            </List>
        </Box>
    );
};
