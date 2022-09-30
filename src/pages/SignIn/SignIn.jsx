import { Form, Button, Input, Label, GoogleIcon, Box, LabelText } from "./SignIn.styled";
import googleIcon from '../../images/svg/google-icon.png'
const SignIn = () => {
    return (
        <Box>
            <Button><GoogleIcon><img src={googleIcon} alt="google" width='18px' height='18px'/></GoogleIcon>
                    Google</Button>
            <div>
                
                <Form>
                   <Label><LabelText>Електронна адреса<span>*</span></LabelText>
                    <Input type="email" placeholder="your@email.com" autoFocus='on'/>
                    </Label> 
                    <Label><LabelText>Пароль<span>*</span></LabelText>
                    <Input type="password" placeholder="Пароль" />
                    </Label>
                    <Button type="submit">Увійти</Button>
                
                </Form>
                <a href="#">Реєстрація</a>
            </div>
        </Box>
    );
};

export default SignIn;
