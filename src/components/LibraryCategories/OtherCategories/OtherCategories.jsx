import OtherCategoriesMobile from './OtherCategoriesMobile';
import OtherCategoriesTablet from './OtherCategoriesTablet';

let mobile = window.matchMedia('(max-width: 767px)').matches;

const OtherCategories = ({ type, color, books }) => {
    return (
        <>
            {mobile ? (
                <OtherCategoriesMobile
                    type={type}
                    color={color}
                    books={books}
                />
            ) : (
                <OtherCategoriesTablet
                    type={type}
                    color={color}
                    books={books}
                />
            )}
        </>
    );
};

export default OtherCategories;
