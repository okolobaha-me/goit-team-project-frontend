import icons from '../../../images/svg/icons.svg';
import { Item, Text, Wrapper, TextSelection, Icon } from './AllCategories.styled';

const OtherCategoriesMobile = ({color}) => {
    return (
        <>
        <Item>
            <Icon color={color} width="22" height="18.1">
                <use href={`${icons}#icon-book-no-color`} />
            </Icon>
            <Wrapper>
                <Text>  Scrum. Революционный метод управлениями проектами.</Text>
                <Text><TextSelection>Автор:</TextSelection> Джефф Сазерленд</Text>
                <Text><TextSelection>Рік:</TextSelection> 2014</Text>
                <Text><TextSelection>Стор.:</TextSelection> 25</Text>
                <Text><TextSelection>Рейтинг:</TextSelection>  <svg width="24" height="12">
                    <use href={`${icons}#icon-greyStar`} />
                </svg></Text>
            </Wrapper>
            </Item>
            <Item>
            <Icon color={color} width="22" height="18.1">
                <use href={`${icons}#icon-book-no-color`} />
            </Icon>
            <Wrapper>
                <Text>  Scrum. Революционный метод управлениями проектами.</Text>
                <Text><TextSelection>Автор:</TextSelection> Джефф Сазерленд</Text>
                <Text><TextSelection>Рік:</TextSelection> 2014</Text>
                <Text><TextSelection>Стор.:</TextSelection> 25</Text>
                <Text><TextSelection>Рейтинг:</TextSelection>  <svg width="24" height="12">
                    <use href={`${icons}#icon-greyStar`} />
                </svg></Text>
            </Wrapper>
            </Item>
            <Item>
            <Icon color={color} width="22" height="18.1">
                <use href={`${icons}#icon-book-no-color`} />
            </Icon>
            <Wrapper>
                <Text>  Scrum. Революционный метод управлениями проектами.</Text>
                <Text><TextSelection>Автор:</TextSelection> Джефф Сазерленд</Text>
                <Text><TextSelection>Рік:</TextSelection> 2014</Text>
                <Text><TextSelection>Стор.:</TextSelection> 25</Text>
                <Text><TextSelection>Рейтинг:</TextSelection>  <svg width="24" height="12">
                    <use href={`${icons}#icon-greyStar`} />
                </svg></Text>
            </Wrapper>
            </Item>
            
        </>
        
    )
};

export default OtherCategoriesMobile;