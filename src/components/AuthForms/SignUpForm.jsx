import {
    Button,
    DesktopBox,
    TabletBox,
    GoogleIcon,
    MobBox,
    Link,
    Container,
    Form,
    Label,
    LabelText,
    Input,
    Span,
    PasLabel,
    EnterBtn,
    LinkBox,
    LinkSpan,
} from './SignUpForm.styled';
import googleIcon from '../../images/svg/google-icon.png';

const SignUpForm = () => {
    const formSubmit = evt => {
        evt.preventDefault();
    };
    return (
        <>
            <Container>
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
                            <Form onSubmit={formSubmit}>
                                <Label>
                                    <LabelText>
                                        Ім’я<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="text"
                                        placeholder="..."
                                        autoFocus="on"
                                    />
                                </Label>

                                <Label>
                                    <LabelText>
                                        Електронна адреса<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="email"
                                        placeholder="your@email.com"
                                        autoFocus="on"
                                    />
                                </Label>

                                <PasLabel>
                                    <LabelText>
                                        Пароль<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="password"
                                        placeholder="..."
                                    />
                                </PasLabel>

                                <PasLabel>
                                    <LabelText>
                                        Підтвердити пароль<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="password"
                                        placeholder="..."
                                    />
                                </PasLabel>

                                <EnterBtn variant="accent" type="submit">
                                    Зареєструватися
                                </EnterBtn>
                            </Form>

                            <LinkBox>
                                <LinkSpan>Вже з нами?</LinkSpan>{' '}
                                <Link to={'/signin'}>Увійти</Link>
                            </LinkBox>
                        </MobBox>
                    </TabletBox>
                </DesktopBox>
            </Container>
        </>
    );
};

export default SignUpForm;
