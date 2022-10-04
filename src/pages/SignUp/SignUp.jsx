import { SignUpForm } from '../../components/AuthForms';
import { BooksInfo } from '../../components/BooksInfo';
import SignUpWrapper from '../../components/SignUpWrapper';

const SignUp = () => {
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <SignUpWrapper>
            <SignUpForm />
            {!isMobile && <BooksInfo />}
        </SignUpWrapper>
    );
};

export default SignUp;
