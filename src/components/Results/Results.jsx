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
    DatesItem,
    Date,
    Time,
    NumberOfPages,
    Pages,
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
            <DatesList>
                <DatesItem>
                    <Date>10.10.2019</Date>
                    <Time>08:10:23</Time>
                    <NumberOfPages>
                        32&nbsp;
                        <Pages>стор.</Pages>
                    </NumberOfPages>
                </DatesItem>
                <DatesItem>
                    <Date>10.10.2019</Date>
                    <Time>23:50:23</Time>
                    <NumberOfPages>
                        212&nbsp;
                        <Pages>стор.</Pages>
                    </NumberOfPages>
                </DatesItem>
                <DatesItem>
                    <Date>10.10.2019</Date>
                    <Time>17:03:23</Time>
                    <NumberOfPages>
                        178&nbsp;
                        <Pages>стор.</Pages>
                    </NumberOfPages>
                </DatesItem>
                <DatesItem>
                    <Date>18.10.2022</Date>
                    <Time>22:22:22</Time>
                    <NumberOfPages>
                        32&nbsp;
                        <Pages>стор.</Pages>
                    </NumberOfPages>
                </DatesItem>
            </DatesList>
        </Wrapper>
    );
}
