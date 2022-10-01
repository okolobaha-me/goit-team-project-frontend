import styled from '@emotion/styled';
import { DatePicker, InputNumber } from 'antd';
import { mq } from '../../baseStyles/utils/mediaQueries';
// import { colors, fonts } from '../../baseStyles/utils/variables';

export const Wrapper = styled.div`
    width: 280px;
    height: 340px;

    padding: 20px;

    background-color: #fff;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
`;

export const Form = styled.form`
    /* display: flex;
    flex-wrap: wrap; */
`;

export const WrapperOdLabels = styled.div`
    display: flex;
    margin-bottom: 28px;
`;

export const Title = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    margin-bottom: 12px;

    /* deep blue */

    color: #242a37;

    &:nth-of-type(2) {
        font-weight: 700;
        margin-bottom: 4px;

        /* &::after {
            content: '';
            width: 71px;
            height: 1px;
        } */
    }
`;

export const DatePickerCustom = styled(DatePicker)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #242a37;

    width: 110px;
    height: 42px;

    background-color: #f6f7fb;
    border: 1px solid #a6abb9;

    margin-right: 20px;
    margin-top: 4px;

    /* ${mq.tablet} {
        width: 250px;
    } */
`;

export const Icon = styled.svg`
    width: 13px;
    height: 7px;
`;

export const Input = styled(InputNumber)`
    width: 110px;
    height: 42px;

    background-color: #f6f7fb;
    border: 1px solid #a6abb9;

    display: flex;
    align-items: center;

    margin-top: 4px;
`;

export const Label = styled.label`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: #898f9f;

    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
    background: #ff6b08;

    width: 240px;

    padding-top: 10px;
    padding-bottom: 10px;

    margin-bottom: 24px;
`;
