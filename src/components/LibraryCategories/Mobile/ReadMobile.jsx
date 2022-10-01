import icons from '../../../images/svg/icons.svg';
import { Button, Item, Text, Wrapper, TextSelection, Icon } from './AllCategories.styled';

const ReadMobile = ({color}) => {
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
                    
                <Button type='button' variant={'gray'}>Резюме</Button>
            </Wrapper>
            </Item> 
            </>
        
    )
};

export default ReadMobile;