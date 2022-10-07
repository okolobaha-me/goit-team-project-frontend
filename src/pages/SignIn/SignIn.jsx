import {
    Button,
    DesktopBox,
    TabletBox,
    QuoteAutor,
    Line,
    QuoteTextBox,
    QuoteIconSpan,
    GoogleIcon,
    QuoteText,
    MobBox,
    QuoteBox,
    Link,
    Container,
} from './SignIn.styled';
import googleIcon from '../../images/svg/google-icon.png';
import icons from '../../images/svg/icons.svg';
import { SignInForm } from '../../components/AuthForms';
import AnimatioPage from '../../components/Animations/AnimationPage';

const SignIn = () => {
    return (
        <Container>
            <AnimatioPage>
                <DesktopBox>
                    <TabletBox>
                        <MobBox>
                            <Button>
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
                                Книги — это корабли мысли, странствующие по
                                волнам времени и бережно несущие свой
                                драгоценный груз от поколения к поколению.{' '}
                            </QuoteText>
                        </QuoteTextBox>
                        <Line></Line>
                        <QuoteAutor>Бэкон Ф.</QuoteAutor>
                    </QuoteBox>
                </DesktopBox>
            </AnimatioPage>
        </Container>
    );
};

export default SignIn;
