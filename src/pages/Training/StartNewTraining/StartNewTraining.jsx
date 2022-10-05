import {Navigate} from 'react-router-dom';
import {TrainingForm} from '../../../components/TrainingForm';
import icons from '../../../images/svg/icons.svg';
import {GoBackIcon, GoBackLink} from './StartNewTraining.styled';
import {Title} from '../Training.styled';

const StartNewTraining = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <>
            {!isMobile && <Navigate to={'../'} />}
            <GoBackLink to={'..'}>
                <GoBackIcon width="24" height="12">
                    <use href={`${icons}#icon-arrowBack`} />
                </GoBackIcon>
            </GoBackLink>
            <Title>Моє тренування</Title>
            <TrainingForm />
        </>
    );
};

export default StartNewTraining;
