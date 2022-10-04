import FormLibrary from '../../../components/FormLibrary';
import {Plan} from '../../../components/LibraryCategories/Plan';
import {ButtonMore, IconMore,} from '../../../components/LibraryCategories/LibraryCategories.styled';
import icons from '../../../images/svg/icons.svg';

const PlanPage = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <>
            {!isMobile && <FormLibrary />}

            <Plan length={'long'} />

            {isMobile && (
                <ButtonMore to={'../add-book'} relative="library">
                    <IconMore width="52" height="52">
                        <use href={`${icons}#icon-more`}></use>
                    </IconMore>
                </ButtonMore>
            )}
        </>
    );
};

export default PlanPage;
