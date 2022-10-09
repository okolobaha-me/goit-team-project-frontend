import {Button, DatePickerCustom, Form, Icon, Input, Label, Title, Wrapper, WrapperOdLabels,} from './Results.styled';
import icons from '../../images/svg/icons.svg';
import moment from 'moment';
import {useState} from 'react';
import {useAddUpdateStatisticMutation} from '../../redux/books/booksSlice';
import {format} from 'date-fns';

export function Results() {
    const [pages, setPages] = useState(0);
    const [date, setDate] = useState(moment());

    const [addInfo] = useAddUpdateStatisticMutation();

    const handleSubmit = e => {
        e.preventDefault();
        // console.log({ date: format(date._d, 'yyyy-MM-dd'), pages });

        // console.log(date._d);
        addInfo({ date: format(date._d, 'yyyy-MM-dd'), pages }).then(r => {
            console.log(r);
        });
    };

    return (
        <Wrapper>
            <Title>Результати</Title>
            <Form>
                <WrapperOdLabels>
                    <Label>
                        Дата
                        <DatePickerCustom
                            format="DD.MM.YY"
                            defaultValue={date}
                            onChange={setDate}
                            suffixIcon={
                                <Icon>
                                    <use href={`${icons}#icon-polygon`} />
                                </Icon>
                            }
                        />
                    </Label>
                    <Label>
                        Кількість сторінок
                        <Input defaultValue={pages} onChange={setPages}></Input>
                    </Label>
                </WrapperOdLabels>
                <Button type="submit" onClick={handleSubmit}>
                    Додати результат
                </Button>
            </Form>
            <Title>СТАТИСТИКА</Title>
            {/* <DatesList>
                {items.map((item, index) => {
                    return <DateItem key={index} data={item}></DateItem>;
                })}
            </DatesList> */}
        </Wrapper>
    );
}
