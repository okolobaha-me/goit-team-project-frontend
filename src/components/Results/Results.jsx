import {
    Wrapper,
    Title,
    DatePickerCustom,
    Icon,
    Input,
    Label,
    Button,
    Form,
    WrapperOdLabels,
} from './Results.styled';
import icons from '../../images/svg/icons.svg';
import moment from 'moment';

export function Results() {
    return (
        <Wrapper>
            <Title>Результати</Title>
            <Form>
                <WrapperOdLabels>
                    <Label>
                        Дата
                        <DatePickerCustom
                            format="DD.MM.YYYY"
                            defaultValue={moment()}
                            onChange={e => console.log(e)}
                            suffixIcon={
                                <Icon>
                                    <use href={`${icons}#icon-polygon`} />
                                </Icon>
                            }
                        />
                    </Label>
                    <Label>
                        Кількість сторінок
                        <Input
                            defaultValue={32}
                            onChange={e => console.log(e)}
                        ></Input>
                    </Label>
                </WrapperOdLabels>
                <Button type="submit">Додати результат</Button>
            </Form>
            <Title>СТАТИСТИКА</Title>
        </Wrapper>
    );
}
