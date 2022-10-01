import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../../../baseStyles/utils/variables';
import { list, btn } from '../../../baseStyles/commonStyles';
import { mq } from '../../../baseStyles/utils/mediaQueries';

export const titles = () => {
    return css`
        font-size: 14px;
        color: ${colors.darkGrayText};
        font-weight: 500;
        line-height: 1, 2;
        padding-bottom: 8px;
    `;
};

export const infoBook = () => {
    return css`
        overflow: hidden;
        font-size: 14px;
        font-weight: 500;
        color: ${colors.mainText};
    `;
};

export const Wrapper = styled.div`
    display: flex;
`;

export const NameBook = styled.p`
    ${titles}
    margin-right: 124px;
    ${mq.desktop} {
        margin-right: 269px;
    }
`;
export const Author = styled.p`
    ${titles}
    margin-right: 84px;
    ${mq.desktop} {
        margin-right: 200px;
    }
`;

export const Year = styled.p`
    ${titles}
    margin-right: 36px;
    ${mq.desktop} {
        margin-right: 85px;
    }
`;

export const Page = styled.p`
    ${titles}
    margin-right: 32px;
    ${mq.desktop} {
        margin-right: 110px;
    }
`;

export const Rating = styled.p`
    ${titles}
`;

export const List = styled.ul`
    ${list}
    display: flex;
    flex-direction: column;
`;

export const Item = styled.li`
    display: flex;
    padding: 11px 16px;
    margin-bottom: 8px;
    align-items: center;
    justify-content: space-around;
    background: ${colors.whiteText};
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    :last-of-type {
        margin-bottom: 0px;
    }
`;

export const Icon = styled.svg`
    fill: ${({ color }) => color};
    margin-right: 18px;
`;

export const Book = styled.p`
    ${infoBook}
    width: 135px;
    height: 34px;
    margin-right: 21px;
    ${mq.desktop} {
        width: 260px;
        height: 17px;
        margin-right: 41px;
    }
`;

export const Writer = styled.p`
    ${infoBook}
    width: 87px;
    margin-right: 29px;
    ${mq.desktop} {
        width: 158px;
        height: 17px;
        margin-right: 100px;
    }
`;

export const Date = styled.p`
    ${infoBook}
    width: 36px;
    margin-right: 52px;
    ${mq.desktop} {
        width: 36px;
        height: 17px;
        margin-right: 89px;
    }
`;

export const NumberPages = styled.p`
    ${infoBook}
    width: 23px;
    margin-right: 32px;
    ${mq.desktop} {
        width: 23px;
        height: 17px;
        margin-right: 110px;
    }
`;

export const Stars = styled.p`
    width: 97px;
    margin-right: 32px;
    ${mq.desktop} {
        width: 101px;
        height: 17px;
        margin-right: 60px;
    }
`;

export const Button = styled.button`
    ${btn}
    padding: 10px;
    ${mq.desktop} {
        padding: 12px 35px;
        margin-right: 75px;
    }
`;

export const TitleName = styled.p`
    ${titles};
    margin-right: 276px;
    ${mq.desktop} {
        margin-right: 548px;
    }
`;

export const TitleAuthor = styled.p`
    ${titles};
    margin-right: 169px;
    ${mq.desktop} {
        margin-right: 344px;
    }
`;

export const TitleYear = styled.p`
    ${titles};
    margin-right: 40px;
    ${mq.desktop} {
        margin-right: 80px;
    }
`;

export const TitlePage = styled.p`
    ${titles};
`;

export const BookHeader = styled.p`
    ${infoBook};
    width: 274px;
    height: auto;
    margin-right: 32px;
    ${mq.desktop} {
        width: 500px;
        margin-right: 81px;
    }
`;

export const BookAuthor = styled.p`
    ${infoBook};
    width: 168px;
    height: auto;
    margin-right: 38px;
    margin-right: 32px;
    ${mq.desktop} {
        width: 208px;
        margin-right: 172px;
    }
`;

export const BookYear = styled.p`
    ${infoBook};
    width: 31px;
    margin-right: 53px;
    ${mq.desktop} {
        width: 32px;
        margin-right: 60px;
    }
`;

export const BookPage = styled.p`
    ${infoBook};
    ${mq.desktop} {
        margin-right: 80px;
    }
`;
