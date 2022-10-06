import {
    Form,
    EmailLabel,
    LabelText,
    Span,
    Input,
    PasLabel,
    EnterBtn,
    ErrText,
} from './SignInForm.styled';
import { useForm } from 'react-hook-form';

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
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
                            required: {
                                value: true,
                                message: 'Введіть Ваш email',
                            },
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

                <EnterBtn variant="accent" type="submit">
                    Увійти
                </EnterBtn>
            </Form>
        </>
    );
};

export default SignInForm;
