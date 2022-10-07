import {
    Button,
    Container,
    DesktopBox,
    EnterBtn,
    ErrText,
    Form,
    GoogleIcon,
    Input,
    Label,
    LabelText,
    Link,
    LinkBox,
    LinkSpan,
    MobBox,
    PasLabel,
    Span,
    TabletBox,
} from './SignUpForm.styled';
import googleIcon from '../../images/svg/google-icon.png';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {googleSignUp, signUp} from '../../redux/auth/auth-operations';

const SignUpForm = () => {
    const [checkPas, setCheckPas] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const isPassMatch = (Pas, confirmPas) => {
        if (Pas !== confirmPas) {
            setCheckPas(false);
            return false;
        }
        setCheckPas(true);
        return true;
    };

    const onSubmit = data => {
        const { password, confirmPas, name, email } = data;

        if (!isPassMatch(password, confirmPas)) return;

        const signUpData = { name, email, password };

        dispatch(signUp(signUpData));
        // navigate('../signin');
    };

    const g = () => {
        dispatch(googleSignUp());
    };

    return (
        <>
            <Container>
                <DesktopBox>
                    <TabletBox>
                        <MobBox>
                            <Button onClick={g}>
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
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Label>
                                    <LabelText>
                                        Ім’я<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="text"
                                        placeholder="..."
                                        autoFocus="on"
                                        name="name"
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message:
                                                    'Поле Ім’я обов’язкове',
                                            },

                                            minLength: {
                                                value: 3,
                                                message:
                                                    'Ім’я повинно бути більше трьох символів',
                                            },

                                            pattern: {
                                                value: /[А-Яа-я0-9a-zA-Z][^\W]/,
                                                message:
                                                    'Ім’я повинно складатися тільки з букв та цифр',
                                            },
                                        })}
                                        aria-invalid={
                                            errors.name ? 'true' : 'false'
                                        }
                                    />

                                    {errors.name && (
                                        <ErrText role="alert">
                                            {errors.name?.message}
                                        </ErrText>
                                    )}
                                </Label>

                                <Label>
                                    <LabelText>
                                        Електронна адреса<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="email"
                                        placeholder="your@email.com"
                                        name="email"
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Введіть Ваш email',
                                            },
                                            pattern: {
                                                value: /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                                                message:
                                                    'Введіть корректну єлектронну адресу ',
                                            },
                                        })}
                                        aria-invalid={
                                            errors.email ? 'true' : 'false'
                                        }
                                    />
                                    {errors.email && (
                                        <ErrText role="alert">
                                            {errors.email?.message}
                                        </ErrText>
                                    )}
                                </Label>

                                <PasLabel>
                                    <LabelText>
                                        Пароль<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="password"
                                        placeholder="..."
                                        name="password"
                                        {...register('password', {
                                            required: "Поле пароль обов'язкове",
                                            pattern: {
                                                value: /^([A-Za-z]|[0-9])+$/,
                                                message:
                                                    'Пароль повинен складатися з латинських букв та цифр',
                                            },
                                            minLength: {
                                                value: 6,
                                                message:
                                                    'Довжина пароля не менше 6 символів',
                                            },
                                        })}
                                        aria-invalid={
                                            errors.password ? 'true' : 'false'
                                        }
                                    />
                                    {errors.password && (
                                        <ErrText role="alert">
                                            {errors.password?.message}
                                        </ErrText>
                                    )}
                                </PasLabel>

                                <PasLabel>
                                    <LabelText>
                                        Підтвердити пароль<Span>*</Span>
                                    </LabelText>
                                    <Input
                                        variant="shadow"
                                        type="password"
                                        placeholder="..."
                                        name="confirmPas"
                                        {...register('confirmPas', {
                                            required: true,
                                        })}
                                        aria-invalid={
                                            errors.confirmPas ? 'true' : 'false'
                                        }
                                    />
                                    {!checkPas && (
                                        <ErrText role="alert">
                                            Паролі повиненні бути однаковими
                                        </ErrText>
                                    )}
                                </PasLabel>

                                <EnterBtn
                                    variant="accent"
                                    onClick={handleSubmit(onSubmit)}
                                >
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
