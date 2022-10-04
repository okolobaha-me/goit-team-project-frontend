import { SignUpForm } from '../../components/AuthForms';
import { BooksInfo } from '../../components/BooksInfo';
import { Box } from './SignUp.styled';

const SignUp = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <Box>
            <SignUpForm />
            {!isMobile && <BooksInfo />}
        </Box>
    );
};

export default SignUp;
