import {
    Button,
    Container,
    DesktopBox,
    GoogleIcon,
    Line,
    Link,
    MobBox,
    QuoteAutor,
    QuoteBox,
    QuoteIconSpan,
    QuoteText,
    QuoteTextBox,
    TabletBox,
} from './SignIn.styled';
import { baseUrl } from '../../API';
import googleIcon from '../../images/svg/google-icon.png';
import icons from '../../images/svg/icons.svg';
import { SignInForm } from '../../components/AuthForms';
import AnimatioPage from '../../components/Animations/AnimationPage';

const signInUrl = `${baseUrl}auth/google`;

const SignIn = () => {
    return (
        <Container>
            <AnimatioPage>
                <DesktopBox>
                    <TabletBox>
                        <MobBox>
                            <Button href={signInUrl}>
                                <GoogleIcon>
                                    <img
                                        src={googleIcon}
                                        alt="google"
                                        width="18px"
                                        height="18px"
                                    />
                                </GoogleIcon>
                                Google
                            </Button>

                            <SignInForm />

                            <Link to={'/signup'}>Реєстрація</Link>
                        </MobBox>
                    </TabletBox>
                    <QuoteBox>
                        <QuoteIconSpan>
                            <svg width="30px" height="30px">
                                <use href={`${icons}#icon-quotes`} />
                            </svg>
                        </QuoteIconSpan>
                        <QuoteTextBox>
                            <QuoteText>
                                Books are the ships of thoughts, wandering
                                through the waves of time.
                            </QuoteText>
                        </QuoteTextBox>
                        <Line></Line>
                        <QuoteAutor>Francis Bacon</QuoteAutor>
                    </QuoteBox>
                </DesktopBox>
            </AnimatioPage>
        </Container>
    );
};

export default SignIn;
