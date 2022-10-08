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
import googleIcon from '../../images/svg/google-icon.png';
import icons from '../../images/svg/icons.svg';
import {SignInForm} from '../../components/AuthForms';

const SignIn = () => {
    return (
        <Container>
            <DesktopBox>
                <TabletBox>
                    <MobBox>
                        <Button href="https://books-reading-goit.herokuapp.com/auth/google">
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
                            Книги — это корабли мысли, странствующие по волнам
                            времени и бережно несущие свой драгоценный груз от
                            поколения к поколению.{' '}
                        </QuoteText>
                    </QuoteTextBox>
                    <Line></Line>
                    <QuoteAutor>Бэкон Ф.</QuoteAutor>
                </QuoteBox>
            </DesktopBox>
        </Container>
    );
};

export default SignIn;
