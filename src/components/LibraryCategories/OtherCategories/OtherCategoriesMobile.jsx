import { Title, List, ButtonMore, IconMore } from '../LibraryCategories.styled';
import OtherCategoriesMobileItem from '../OtherCategories/OtherCategoriesMobileItem';
import icons from '../../../images/svg/icons.svg';

let mobile = window.matchMedia('(max-width: 767px)').matches;

const OtherCategoriesMobile = ({ color, type, books }) => {
    return (
        <>
            <Title>
                {type === 'inProcess' ? 'Читаю' : 'Маю намір прочитати'}
            </Title>
            {mobile && (
                <List>
                    {books &&
                        books.map(book => (
                            <OtherCategoriesMobileItem
                                key={book.id}
                                color={color}
                                book={book}
                            />
                        ))}
                    {type === 'readIntention' && (
                        <ButtonMore>
                            {' '}
                            <IconMore width="52" height="52">
                                <use href={`${icons}#icon-more`}></use>
                            </IconMore>
                        </ButtonMore>
                    )}
                </List>
            )}
        </>
    );
};

export default OtherCategoriesMobile;
