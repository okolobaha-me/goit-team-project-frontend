import { SignUpForm } from '../../components/AuthForms';
import { BooksInfo } from '../../components/BooksInfo';
import { Box } from './SignUp.styled';
import AnimatioPage from '../../components/Animations/AnimationPage';
import { Container } from './SignUp.styled';
const SignUp = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <AnimatioPage>
            <Container>
                <Box>
                    <SignUpForm />
                    {!isMobile && <BooksInfo />}
                </Box>
            </Container>
        </AnimatioPage>
    );
};

export default SignUp;
