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
    DatesList,
} from './Results.styled';
import icons from '../../images/svg/icons.svg';
import moment from 'moment';
import { DateItem } from './DateItem';

const items = [
    {
        id: '1',
        date: '10.10.2019',
        time: '08:10:23',
        numberOfPages: 342,
    },
    {
        id: '2',
        date: '10.09.2022',
        time: '11:10:00',
        numberOfPages: 34,
    },
];

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
            <DatesList>
                {items.map(item => {
                    return <DateItem key={item.id} data={item}></DateItem>;
                })}
            </DatesList>
        </Wrapper>
    );
}
