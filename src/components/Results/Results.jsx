import {
    Button,
    DatePickerCustom,
    DatesList,
    Form,
    Icon,
    Input,
    Label,
    Title,
    Wrapper,
    WrapperOdLabels,
} from './Results.styled';
import icons from '../../images/svg/icons.svg';
import moment from 'moment';
import { format } from 'date-fns';
import { useState } from 'react';
import {
    useGetPlanningQuery,
    useAddUpdateStatisticMutation,
} from '../../redux/books/booksSlice';

export function Results() {
    const [info, setInfo] = useState(null);

    const [addInfo] = useAddUpdateStatisticMutation();

    const handleSelectDate = e => {
        const date = e?._d;

        const formatDate = format(date, 'dd-MM-yyyy');

        setInfo({ date: formatDate });
    };

    const handleSelectPages = e => {
        const pages = e;

        setInfo({ ...info, pages });
    };

    const handleSubmit = e => {
        e.preventDefault();

        addInfo(info);
    };

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
                            onChange={handleSelectDate}
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
                            onChange={handleSelectPages}
                        ></Input>
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
