import { colors } from '../../baseStyles/utils/variables';
import { btn, input } from '../../baseStyles/commonStyles';
import { Rating } from '@mui/material';
import styled from '@emotion/styled';
import { mq } from '../../baseStyles/utils/mediaQueries';

export const Form = styled.form`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
`;

export const Title = styled.p`
    margin-bottom: 20px;

    ${mq.tablet} {
        margin-bottom: 12px;
    }
`;

export const StyledRating = styled(Rating)`
    margin-right: 10px;
`;

export const Label = styled.label`
    display: block;
    width: 100%;
`;

export const Input = styled.textarea`
    ${input};
    resize: none;
    display: inline-block;
    width: 100%;
    min-height: 170px;

    &:focus {
        box-shadow: none;
        border: 1px solid ${colors.mainBorder};
    }
`;

export const InputName = styled.p`
    margin-bottom: 8px;

    ${mq.tablet} {
        margin-bottom: 12px;
    }
`;

export const ErrWrapper = styled.div`
    color: ${colors.errorText};
    margin-bottom: 20px;
    font-size: 14px;

    ${mq.tablet} {
        display: flex;
        align-items: center;
    }
`;

export const Button = styled.button`
    ${btn};

    min-width: 96px;
    padding: 12px 14px;

    ${mq.tablet} {
        min-width: 130px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 20px;

    ${mq.tablet} {
        gap: 28px;
    }
`;
