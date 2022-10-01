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
// import 'antd/dist/antd.min.css';

const { Option } = Select;

export function TrainingForm() {
    const [startValue, setStartValue] = useState(null);
    const [endValue, setEndValue] = useState(null);
    const [endOpen, setEndOpen] = useState(false);

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

    return (
        <Form>
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
                placeholder="Виберіть книги з бібліотеки"
                size="large"
                optionFilterProp="children"
                filterOption={(input, option) => {
                    return option.children
                        .toLowerCase()
                        .includes(input.toLowerCase());
                }}
                filterSort={(optionA, optionB) => {
                    return optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase());
                }}
                suffixIcon={
                    <Icon width="13" height="7">
                        <use href={`${icons}#icon-polygon`} />
                    </Icon>
                }
            >
                <Option value="gamlet">Gamlet</Option>
                <Option value="moon">Moon</Option>
                <Option value="war">War</Option>
                <Option value="ukraine">Ukraine</Option>
                <Option value="la-vida">La vida</Option>
                <Option value="remember-me">Remember me</Option>
            </Selects>
            <Button type="submit">Додати</Button>
        </Form>
    );
}
