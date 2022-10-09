import { Date, DatesItem, NumberOfPages, Pages, Time } from './Results.styled';

export function DateItem({ data: { formatDate, nowTime, pages } }) {
    return (
        <DatesItem>
            <Date>{formatDate}</Date>
            <Time>{nowTime}</Time>
            <NumberOfPages>
                {pages}&nbsp;
                <Pages>стор.</Pages>
            </NumberOfPages>
        </DatesItem>
    );
}
