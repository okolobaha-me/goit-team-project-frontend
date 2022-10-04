import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../../baseStyles/utils/variables';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { btn, input } from '../../baseStyles/commonStyles';


const label = () => {
    return css`
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.21;
        color: ${colors.whiteText};

        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;

        ${mq.tablet} {
            font-weight: 500;
            color: ${colors.darkGrayText};
        }
    `;
};

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    ${input};
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    width: 100%;
`;

export const EmailLabel = styled.label`
    ${label};
`;

export const PasLabel = styled.label`
    ${label};
    ${mq.tablet} {
        margin-bottom: 32px;
    }
`;

export const LabelText = styled.p`
    margin-bottom: 8px;
`;

export const Span = styled.span`
    margin-left: 5px;
    color: ${colors.accentText};
`;

export const EnterBtn = styled.button`
    ${btn};
    font-size: 16px;
    line-height: 1.25;
    padding: 20px 110px;
    ${mq.mobileOnly} {
        margin-bottom: 16px;
    }
    margin-bottom: 20px;
`;