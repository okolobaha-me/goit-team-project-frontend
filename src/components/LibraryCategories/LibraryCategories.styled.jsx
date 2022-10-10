// libraryCategoriesStyled
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { btn, colors, list, mq } from '../../baseStyles';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

export const titles = () => {
    return css`
        font-size: 14px;
        color: ${colors.darkGrayText};
        font-weight: 500;
        line-height: 1.2;
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

export const item = () => {
    return css`
        display: flex;
        margin-bottom: 8px;
        align-items: center;
        justify-content: center;
        background: ${colors.whiteText};
        box-shadow: 0 2px 3px rgba(9, 30, 63, 0.1);
    `;
};

export const Wrapper = styled.div`
    background: ${colors.mainBg};
`;

export const Title = styled.h2`
    &:first-of-type {
        margin-top: 0;
        padding-top: 0;
    }

    font-size: 19px;
    font-weight: 600;
    line-height: 1.4;
    color: ${colors.mainText};
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const List = styled.ul`
    ${list};
    position: relative;
`;

export const IconMore = styled.svg``;

export const ButtonMore = styled(Link)`
    border: none;
    position: fixed;
    z-index: 100;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-around;
    padding: 20px 26px 32px 20px;
    background: ${colors.whiteBg};
    box-shadow: 0 2px 3px 0 #091e3f1a;
    margin-bottom: 20px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const ItemBook = styled.li`
    ${item};
    padding: 11px 16px;

    align-items: center;
    justify-content: center;
    background: ${colors.whiteText};
    box-shadow: 0 2px 3px rgba(9, 30, 63, 0.1);
    :last-of-type {
        margin-bottom: 0;
    }
`;
export const ItemOtherBook = styled.li`
    ${item};
    padding: 20px 23px;
`;

export const Icon = styled.svg`
    fill: ${({ color }) => color};
`;

export const Text = styled.p`
    font-size: 12px;
    color: ${colors.mainText};
    margin-bottom: 14px;
    display: flex;
    align-items: center;

    &:first-of-type {
        margin-top: 0;
    }
`;

export const TextSelection = styled.span`
    color: ${colors.darkGrayText};
    display: inline-block;
    width: 70px;
    margin-right: 12px;
`;

export const Button = styled.button`
    ${btn};

    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    padding-top: 11px;
    padding-bottom: 12px;
    padding-left: 35px;
    padding-right: 33px;
    ${mq.desktop} {
        margin: 0;
        margin-top: auto;
        padding-left: 63px;
        padding-right: 63px;
    }
`;

export const WrapperItem = styled.div`
    padding-left: 12px;
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const WrapperTitles = styled.div`
    display: flex;
`;

export const NameBook = styled.p`
    ${titles};
    margin-right: 124px;
    ${mq.desktop} {
        margin-right: 269px;
    }
`;
export const Author = styled.p`
    ${titles};
    margin-right: 84px;
    ${mq.desktop} {
        margin-right: 200px;
    }
`;

export const Year = styled.p`
    ${titles};
    margin-right: 36px;
    ${mq.desktop} {
        margin-right: 85px;
    }
`;

export const Page = styled.p`
    ${titles};
    margin-right: 32px;
    ${mq.desktop} {
        margin-right: 110px;
    }
`;

export const RatingTitle = styled.p`
    ${titles};
`;

export const ListOther = styled.ul`
    ${list};
    display: flex;
    flex-direction: column;
`;

export const IconBook = styled.svg`
    fill: ${({ color }) => color};
    margin-right: 18px;
`;

export const Book = styled.p`
    ${infoBook};
    width: 149px;
    margin-right: 10px;
    ${mq.desktop} {
        width: 282px;
        margin-right: 16px;
    }
`;

export const Writer = styled.p`
    ${infoBook};
    width: 105px;
    margin-right: 10px;
    ${mq.desktop} {
        width: 242px;
        margin-right: 16px;
    }
`;

export const Date = styled.p`
    ${infoBook};
    width: 78px;
    margin-right: 10px;
    ${mq.desktop} {
        width: 104px;
        margin-right: 16px;
    }
`;

export const NumberPages = styled.p`
    ${infoBook};
    width: 44px;
    margin-right: 10px;
    ${mq.desktop} {
        width: 119px;
        margin-right: 16px;
    }
`;

export const Stars = styled.p`
    width: 119px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    ${mq.desktop} {
        width: 146px;
        margin-right: 16px;
    }
`;

export const ButtonRating = styled.button`
    ${btn};
    padding: 10px;
    ${mq.desktop} {
        padding: 12px 35px;
        margin-right: 80px;
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
    width: 288px;
    height: auto;
    margin-right: 18px;
    ${mq.desktop} {
        width: 559px;
        margin-right: 16px;
    }
`;

export const BookAuthor = styled.p`
    ${infoBook};
    width: 186px;
    height: auto;
    margin-right: 18px;

    ${mq.desktop} {
        width: 368px;
        margin-right: 16px;
    }
`;

export const BookYear = styled.p`
    ${infoBook};
    width: 65px;
    margin-right: 18px;
    ${mq.desktop} {
        width: 106px;
        margin-right: 16px;
    }
`;

export const BookPage = styled.p`
    ${infoBook};

    ${mq.desktop} {
        width: 88px;
        margin-right: 18px;
    }
`;

export const StyledRating = styled(Rating)`
    width: 97px;
    height: 17px;
    ${mq.desktop} {
        width: 101px;
    }
`;

export const LinkMoreWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: end;
    padding-right: 10px;

    ${mq.tablet} {
        padding-right: 40px;
    }
`;

export const LinkMore = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    color: ${colors.accentText};
    display: flex;
    align-items: center;
    transition: all 200ms linear;
    fill: ${colors.accentText};

    &:hover,
    &:focus {
        fill: #40a9ff;
    }
`;

export const ArrowMore = styled.svg`
    transform: rotate(180deg);
    margin-left: 10px;
`;

export const EmptyCategoryMessage = styled.p`
    background: ${colors.whiteText};
    box-shadow: 0 2px 3px rgba(9, 30, 63, 0.1);
    padding: 20px 24px;
`;
