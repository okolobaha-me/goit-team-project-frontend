import { Title, List, Wrapper, Icon, Button } from './LibraryCategories.styled';
import OtherCategories from './Mobile/OtherCategoriesMobile';
import ReadMobile from './Mobile/ReadMobile';
import ReadTablet from './Tablet/ReadTablet';
import { colors } from '../../baseStyles/utils/variables';
import icons from '../../images/svg/icons.svg';
import OtherCategoriesTablet from './Tablet/OtherCategoriesTablet';

const LibraryCategories = () => {
    let mobile = window.matchMedia('(max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 768px)');

    return (
        <Wrapper>
            <Title>Прочитано</Title>
            <List>
                {mobile.matches && (
                    <ReadMobile color={`${colors.darkGrayText}`} />
                )}
                {tablet.matches && (
                    <ReadTablet color={`${colors.darkGrayText}`} />
                )}
            </List>
            <Title>Читаю</Title>
            <List>
                {mobile.matches && (
                    <OtherCategories color={`${colors.accentBg}`} />
                )}
                {tablet.matches && (
                    <OtherCategoriesTablet color={`${colors.accentBg}`} />
                )}
            </List>
            <Title>Маю намір прочитати</Title>
            <List>
                {mobile.matches && (
                    <>
                        <OtherCategories color={`${colors.darkGrayText}`} />
                        <Button>
                            {' '}
                            <Icon width="52" height="52">
                                <use href={`${icons}#icon-more`}></use>
                            </Icon>
                        </Button>
                    </>
                )}
                {tablet.matches && (
                    <OtherCategoriesTablet color={`${colors.darkGrayText}`} />
                )}
            </List>
        </Wrapper>
    );
};

export default LibraryCategories;
