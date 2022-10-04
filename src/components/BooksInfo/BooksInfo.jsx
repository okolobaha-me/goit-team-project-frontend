import { Box, MainTitle, SecTitle, Text, ListItem, ListBox, IconSpan, BtnList, EnterBtn, RegisterBtn, BtnItem, FirstList, SecList } from './BooksInfo.styled';
import icons from '../../images/svg/icons.svg';

const BookInfo = () => {
    return (
        <Box>
           
            <MainTitle>Books Reading</MainTitle>
            <ListBox>
            <FirstList>
                <SecTitle>Допоможе вам</SecTitle>
                <ListItem>
                    <IconSpan>
                    <svg width="4px" height="8px">
                        <use href={`${icons}#icon-arrowToRight`}></use>
                    </svg>
                    </IconSpan>
                    <Text>Швидше сформулювати свою ціль і розпочати читати</Text></ListItem>
                <ListItem> <IconSpan>
                <svg width='4px' height='8px'>
                        <use href={`${icons}#icon-arrowToRight`}></use>
                    </svg>
                </IconSpan>
                    
                    <Text>Пропорційно розподілити навантаження на кожний день</Text></ListItem>
                <ListItem> 
                    <IconSpan><svg width='4px' height='8px'>
                        <use href={`${icons}#icon-arrowToRight`}></use>
                    </svg>
                        </IconSpan>
                    <Text>Відстежувати особистий успіх</Text></ListItem>
            </FirstList>
            <SecList>
          <SecTitle>Також ви зможете </SecTitle>
                <ListItem>   <IconSpan><svg width='4px' height='8px'>
                        <use href={`${icons}#icon-arrowToRight`}></use>
                    </svg>
                        </IconSpan>
                    <Text>Формувати особисту думку незалежну від інших</Text></ListItem>
                <ListItem>   <IconSpan><svg width='4px' height='8px'>
                        <use href={`${icons}#icon-arrowToRight`}></use>
                    </svg>
                        </IconSpan>
                    <Text>Підвищити свої професійні якості опираючись на нові знання</Text></ListItem>
                <ListItem>   <IconSpan><svg width='4px' height='8px'>
                        <use href={`${icons}#icon-arrowToRight`}></use>
                    </svg>
                        </IconSpan>
                    <Text>Стати цікавим співрозмовником</Text></ListItem>
            </SecList>
            </ListBox>
            <BtnList>
                <BtnItem><EnterBtn variant={'transparent'}>Увійти</EnterBtn></BtnItem>
                <BtnItem><RegisterBtn variant={'accent'}>Реєстрація</RegisterBtn></BtnItem>
            </BtnList>
        </Box>
    )
};

export default BookInfo;