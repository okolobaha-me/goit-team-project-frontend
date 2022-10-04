import {
    Form,
    EmailLabel,
    LabelText,
    Span,
    Input,
    PasLabel,
    EnterBtn,
} from './SignInForm.styled';

const SignInForm = () => {
    const formSubmit = evt => {
        evt.preventDefault();
    };

    return (
        <>
            <Form onSubmit={formSubmit}>
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
        </>
    );
};

export default SignInForm;
