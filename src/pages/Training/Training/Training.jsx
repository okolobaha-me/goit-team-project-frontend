import {TrainingForm} from '../../../components/TrainingForm';
import {
    BottomWrapper,
    Button,
    FormListWrapper,
    FormWrapper,
    GoalsWrapper,
    HeadWrapper,
    ListWrapper,
    Title,
} from '../Training.styled';
import Goals from '../../../components/Goals';
import {ListOfBooksStartTraining} from '../../../components/ListOfBooksStartTraining';
import {ButtonMore, IconMore,} from '../../../components/LibraryCategories/LibraryCategories.styled';
import icons from '../../../images/svg/icons.svg';
import {Graph} from '../../../components/Graph/Graph';

export const Training = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <>
            <HeadWrapper>
                <GoalsWrapper>
                    <Goals />
                </GoalsWrapper>

                <FormListWrapper>
                    <FormWrapper>
                        {!isMobile && (
                            <>
                                <Title>Моє тренування</Title>
                                <TrainingForm />
                            </>
                        )}
                    </FormWrapper>

                    <ListWrapper>
                        <ListOfBooksStartTraining />
                    </ListWrapper>
                </FormListWrapper>
            </HeadWrapper>

            <BottomWrapper>
                <Button variant={'accent'}>Почати тренування</Button>

                <Graph />
            </BottomWrapper>

            {isMobile && (
                <ButtonMore to={'start-new'} relative="library">
                    <IconMore width="52" height="52">
                        <use href={`${icons}#icon-more`}></use>
                    </IconMore>
                </ButtonMore>
            )}
        </>
    );
};
