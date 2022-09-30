import styled from '@emotion/styled';
import Checkbox from 'react-custom-checkbox';
import { HiCheck } from 'react-icons/hi';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { colors, fonts } from '../../baseStyles/utils/variables';

export const TableOfBooks = styled.div`
    font-family: ${fonts.main};
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    ${mq.tablet} {
        font-size: 14px;
        line-height: 17px;

        overflow: auto;

        width: 704px;
        height: 228px;

        border-top: 1px solid ${colors.sectionBorder};
    }

    ${mq.desktop} {
        width: 928px;
        height: 213px;
    }
`;

export const ListOfLabels = styled.ul`
    display: none;

    ${mq.tablet} {
        display: flex;

        width: 704px;
        padding-top: 12px;
        padding-bottom: 12px;
        margin: 0 auto;

        border-bottom: 1px solid ${colors.sectionBorder};
    }

    ${mq.desktop} {
        width: 928px;

        border-bottom: 1px solid ${colors.sectionBorder};
    }
`;

export const ItemLabel = styled.li`
    color: ${colors.darkGrayText};

    &:nth-of-type(1) {
        width: 40%;
    }

    &:nth-of-type(2) {
        width: 30%;
    }

    &:nth-of-type(3) {
        width: 15%;
    }

    &:nth-of-type(4) {
        width: 15%;
    }

    ${mq.desktop} {
        &:nth-of-type(3) {
            width: 19%;
        }

        &:nth-of-type(4) {
            width: 11%;
        }
    }
`;

export const ListOfBook = styled.ul`
    width: 280px;

    ${mq.tablet} {
        width: 704px;
    }

    ${mq.desktop} {
        width: 928px;
    }
`;

export const Item = styled.li`
    padding-top: 20px;
    padding-bottom: 20px;

    border-bottom: 1px solid ${colors.sectionBorder};

    &::first-of-type {
        border-top: 1px solid ${colors.sectionBorder};
    }

    ${mq.tablet} {
        display: flex;
        position: relative;
        align-items: center;
    }

    ${mq.desktop} {
        border: none;
        padding-bottom: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;

    ${mq.tablet} {
        width: 40%;
        align-items: center;
    }
`;

export const CustomCheckbox = styled(Checkbox)`
    cursor: pointer;
    margin-right: 19px;

    ${mq.tablet} {
        margin-right: 18px;
    }

    ${mq.desktop} {
        margin-right: 21px;
    }
`;

export const CheckboxChecked = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 13px;
    height: 13px;
    border: 1px solid ${colors.accentBg};
    border-radius: 2px;
`;

export const IconChecked = styled(HiCheck)`
    width: 11px;
    height: 11px;

    color: ${colors.accentBg};
`;

export const IconBook = styled.svg`
    width: 22px;
    height: 17px;
`;

export const Title = styled.p`
    margin-bottom: 12px;
    color: ${colors.mainText};

    ${mq.tablet} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        width: 180px;
        margin-bottom: 0;
    }

    ${mq.desktop} {
        width: 309px;
        -webkit-line-clamp: 1;
    }
`;

export const IconDelete = styled.svg`
    width: 14px;
    height: 18px;
`;

export const BtnDelete = styled.button`
    width: 14px;
    height: 18px;

    ${mq.tablet} {
        position: absolute;
        top: 25px;
        right: 16px;
    }

    ${mq.desktop} {
        position: absolute;
        top: 19px;
        right: 38px;
    }
`;

export const ListOfDesc = styled.ul`
    padding-left: 34px;

    ${mq.tablet} {
        display: flex;

        width: 418px;
        padding-left: 0;
    }

    ${mq.desktop} {
        width: 556px;
    }
`;

export const DescItem = styled.li`
    display: flex;
    justify-content: flex-end;
    width: 246px;

    padding-bottom: 14px;

    ${mq.tablet} {
        padding-bottom: 0;
        align-self: center;

        &:nth-of-type(1) {
            width: 50%;
        }

        &:nth-of-type(2) {
            width: 26%;
        }

        &:nth-of-type(3) {
            width: 24%;
        }
    }

    ${mq.desktop} {
        &:nth-of-type(2) {
            width: 32%;
        }

        &:nth-of-type(3) {
            width: 18%;
        }
    }
`;

export const Label = styled.p`
    flex-basis: 30%;
    align-self: flex-start;

    color: ${colors.darkGrayText};

    ${mq.tablet} {
        display: none;
    }
`;

export const Desc = styled.p`
    flex-basis: 70%;
    flex-grow: 1;

    color: ${colors.mainText};
`;
