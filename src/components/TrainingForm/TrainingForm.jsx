import { Select } from 'antd';
import { useState } from 'react';
import icons from '../../images/svg/icons.svg';
import {
    Button,
    CalendarIcon,
    DatePickers,
    DatesWrapper,
    Form,
    Icon,
    InputDateWrapper,
    Selects,
} from './TrainingForm.styled';
import notification from '../../helpers/notification';

const { warningNotification } = notification;

const { Option } = Select;

export function TrainingForm({
    addBook,
    startValue,
    setStartValue,
    endValue,
    setEndValue,
    books,
}) {
    const [endOpen, setEndOpen] = useState(false);
    const [book, setBook] = useState(null);

    const disabledStartDate = startValue => {
        if (!startValue || !endValue) {
            return false;
        }

        return startValue.valueOf() > endValue.valueOf();
    };

    const disabledEndDate = endValue => {
        if (!endValue || !startValue) {
            return false;
        }

        return endValue.valueOf() <= startValue.valueOf();
    };

    const onChange = (field, value) => {
        switch (field) {
            case 'startValue':
                setStartValue(value);
                break;
            case 'endValue':
                setEndValue(value);
                break;
            default:
                throw new Error();
        }
    };

    const onStartChange = value => {
        onChange('startValue', value);
    };

    const onEndChange = value => {
        onChange('endValue', value);
    };

    const handleStartOpenChange = open => {
        if (!open) {
            setEndOpen(true);
        }
    };

    const handleEndOpenChange = open => {
        setEndOpen(open);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (!book) {
            warningNotification('Виберіть із бібліотеки хоча б одну книгу!');
        } else {
            addBook(book);
        }

        setBook('');
    };

    const handleChange = data => {
        setBook(data);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <DatesWrapper>
                <InputDateWrapper>
                    <DatePickers
                        disabledDate={disabledStartDate}
                        format="YYYY-MM-DD"
                        value={startValue}
                        placeholder="Початок"
                        onChange={onStartChange}
                        onOpenChange={handleStartOpenChange}
                        suffixIcon={
                            <Icon width="13" height="7">
                                <use href={`${icons}#icon-polygon`} />
                            </Icon>
                        }
                    />
                    <CalendarIcon width="17" height="17">
                        <use href={`${icons}#icon-calendar`} />
                    </CalendarIcon>
                </InputDateWrapper>
                <InputDateWrapper>
                    <DatePickers
                        disabledDate={disabledEndDate}
                        format="YYYY-MM-DD"
                        value={endValue}
                        placeholder="Кінець"
                        onChange={onEndChange}
                        open={endOpen}
                        onOpenChange={handleEndOpenChange}
                        suffixIcon={
                            <Icon width="13" height="7">
                                <use href={`${icons}#icon-polygon`} />
                            </Icon>
                        }
                        prevIcon={
                            <Icon width="13" height="7">
                                <use href={`${icons}#icon-polygon`} />
                            </Icon>
                        }
                    />
                    <CalendarIcon width="17" height="17">
                        <use href={`${icons}#icon-calendar`} />
                    </CalendarIcon>
                </InputDateWrapper>
            </DatesWrapper>
            <Selects
                showSearch
                value={book}
                placeholder="Виберіть книги з бібліотеки"
                size="large"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => {
                    return option.children
                        .toLowerCase()
                        .includes(input.toLowerCase());
                }}
                suffixIcon={
                    <Icon width="13" height="7">
                        <use href={`${icons}#icon-polygon`} />
                    </Icon>
                }
            >
                {books.map(book => (
                    <Option value={book._id} key={book._id}>
                        {book.title}
                    </Option>
                ))}
            </Selects>
            <Button type="submit" variant={'transparent'}>
                Додати
            </Button>
        </Form>
    );
}
