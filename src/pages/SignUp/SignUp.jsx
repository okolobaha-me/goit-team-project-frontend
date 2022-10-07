import { SignUpForm } from '../../components/AuthForms';
import { BooksInfo } from '../../components/BooksInfo';
import { Box } from './SignUp.styled';
import AnimatioPage from '../../components/Animations/AnimationPage';
const SignUp = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <AnimatioPage>
            <Box>
                <SignUpForm />
                {!isMobile && <BooksInfo />}
            </Box>
        </AnimatioPage>
    );
};

export default SignUp;
