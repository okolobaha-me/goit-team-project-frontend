import {
    Form,
    Button,
    DesktopBox,
    Input,
    Span,
    TabletBox,
    EmailLabel,
    PasLabel,
    QuoteAutor,
    Line,
    QuoteTextBox,
    QuoteIconSpan,
    GoogleIcon,
    QuoteText,
    MobBox,
    QuoteBox,
    LabelText,
    Link,
    EnterBtn,
} from './SignIn.styled';
import googleIcon from '../../images/svg/google-icon.png';
import icons from '../../images/svg/icons.svg';

const SignIn = () => {
    return (
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

                    <Form>
                        <EmailLabel>
                            <LabelText>
                                Електронна адреса<Span>*</Span>
                            </LabelText>
                            <Input
                                variant="shadow"
                                type="email"
                                placeholder="your@email.com"
                                autoFocus="on"
                            />
                        </EmailLabel>

                        <PasLabel>
                            <LabelText>
                                Пароль<Span>*</Span>
                            </LabelText>
                            <Input
                                variant="shadow"
                                type="password"
                                placeholder="Пароль"
                            />
                        </PasLabel>

                        <EnterBtn variant="accent" type="submit">
                            Увійти
                        </EnterBtn>
                    </Form>
                    <Link href="#">Реєстрація</Link>
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
    );
};

export default SignIn;
