import {
    MainTitle,
    SecTitle,
    Text,
    ListItem,
    ListBox,
    IconSpan,
    FirstList,
    Container,
    DesktopBox,
} from './BooksInfo.styled';
import icons from '../../images/svg/icons.svg';
import MobLinks from './MobLinks';

const BookInfo = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <Container>
            <DesktopBox>
                <MainTitle>Books Reading</MainTitle>
                <ListBox>
                    <FirstList>
                        <SecTitle>Допоможе вам</SecTitle>
                        <ListItem>
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>
                                Швидше сформулювати свою ціль і розпочати читати
                            </Text>
                        </ListItem>
                        <ListItem>
                            {' '}
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>
                                Пропорційно розподілити навантаження на кожний
                                день
                            </Text>
                        </ListItem>
                        <ListItem>
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>Відстежувати особистий успіх</Text>
                        </ListItem>
                    </FirstList>
                    <ul>
                        <SecTitle>Також ви зможете </SecTitle>
                        <ListItem>
                            {' '}
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>
                                Формувати особисту думку незалежну від інших
                            </Text>
                        </ListItem>
                        <ListItem>
                            {' '}
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>
                                Підвищити свої професійні якості опираючись на
                                нові знання
                            </Text>
                        </ListItem>
                        <ListItem>
                            {' '}
                            <IconSpan>
                                <svg width="4px" height="8px">
                                    <use
                                        href={`${icons}#icon-arrowToRight`}
                                    ></use>
                                </svg>
                            </IconSpan>
                            <Text>Стати цікавим співрозмовником</Text>
                        </ListItem>
                    </ul>
                </ListBox>
            </DesktopBox>
            {isMobile && <MobLinks />}
        </Container>
    );
};

export default BookInfo;
