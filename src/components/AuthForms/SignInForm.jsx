import {EmailLabel, EnterBtn, ErrText, Form, Input, LabelText, PasLabel, Span,} from './SignInForm.styled';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/auth/auth-operations';

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(signIn(data));
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <EmailLabel>
                    <LabelText>
                        Електронна адреса<Span>*</Span>
                    </LabelText>
                    <Input
                        variant="shadow"
                        type="email"
                        placeholder="your@email.com"
                        autoFocus="on"
                        name="email"
                        {...register('email', {
                            required: 'Введіть Ваш email',
                            pattern: {
                                value: /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                                message: 'Введіть корректну єлектронну адресу ',
                            },
                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                        <ErrText role="alert">{errors.email?.message}</ErrText>
                    )}
                </EmailLabel>

                <PasLabel>
                    <LabelText>
                        Пароль<Span>*</Span>
                    </LabelText>
                    <Input
                        variant="shadow"
                        type="password"
                        placeholder="Пароль"
                        name="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: "Поле пароль обов'язкове",
                            },
                            pattern: {
                                value: /^([A-Za-z]|[0-9])+$/,
                                message:
                                    'Пароль повинен складатися з латинських букв та цифр',
                            },
                            minLength: {
                                value: 6,
                                message: 'Довжина пароля не менше 6 символів',
                            },
                        })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {errors.password && (
                        <ErrText role="alert">
                            {errors.password?.message}
                        </ErrText>
                    )}
                </PasLabel>

                <EnterBtn variant="accent" onClick={handleSubmit(onSubmit)}>
                    Увійти
                </EnterBtn>
            </Form>
        </>
    );
};

export default SignInForm;
