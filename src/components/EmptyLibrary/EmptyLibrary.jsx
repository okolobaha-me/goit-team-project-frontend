import icons from '../../images/svg/icons.svg';
import {
    List,
    BookName,
    ArrowBackIcon,
    MobileContainer,
    Btn,
    ListItem,
    Box,
    Title,
    StepText,
    StepTexIcon,
    StepDescr,
    StepDescrIcon,
} from './EmptyLibrary.styled';

const EmptyLibrary = () => {
    return (
        <>
        <MobileContainer>
        
        <ArrowBackIcon width="24" height="12">
               <use href={`${icons}#icon-arrowBack`} />
           </ArrowBackIcon>
           
           <BookName>Назва книги</BookName>
           </MobileContainer>
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
                                <use
                                    href={`${icons}#icon-perpendicularArrow`}
                                />
                            </StepDescrIcon>
                            Додайте до неї книжки, які маєте намір прочитати.
                        </StepDescr>
                    </ListItem>
                    <ListItem>
                        <Title>Крок 2.</Title>
                        <StepText>
                            <StepTexIcon width="15" height="17">
                                <use href={`${icons}#icon-flag`} />
                            </StepTexIcon>{' '}
                            Сформуйте своє перше тренування
                        </StepText>
                        <StepDescr>
                            <StepDescrIcon width="10" height="12">
                                <use
                                    href={`${icons}#icon-perpendicularArrow`}
                                />
                            </StepDescrIcon>
                            Визначте ціль, оберіть період, розпочинайте
                            тренування.
                        </StepDescr>
                    </ListItem>
                </List>
                <Btn variant={'accent'} type="button">
                    Ок
                </Btn>
        </Box>
        </>
    );
};

export default EmptyLibrary;
