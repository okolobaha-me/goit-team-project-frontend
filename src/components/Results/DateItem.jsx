import { DatesItem, Date, Time, NumberOfPages, Pages } from './Results.styled';

export function DateItem({ data: { date, time, numberOfPages } }) {
    return (
        <DatesItem>
            <Date>{date}</Date>
            <Time>{time}</Time>
            <NumberOfPages>
                {numberOfPages}&nbsp;
                <Pages>стор.</Pages>
            </NumberOfPages>
        </DatesItem>
    );
}
