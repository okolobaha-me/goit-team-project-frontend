import styled from '@emotion/styled';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { colors, fonts } from '../../baseStyles/utils/variables';
import {
    btn,
    Container as componentbox,
    input,
} from '../../baseStyles/commonStyles';
import {
    desktopRegisterBgx2,
    desktopRegisterBg,
    mobRegisterBg,
    mobRegisterBgx2,
    tabletRegisterBg,
    tabletRegisterBgx2,
} from '../../images';
import { css } from '@emotion/react';
import { Link as link } from 'react-router-dom';

export const Container = styled(componentbox)`
    ${mq.mobile} {
        padding: 0;
    }

    ${mq.desktop} {
        display: flex;
        margin: 0;
    }
`;

export const DesktopBox = styled.div`
    ${mq.desktop} {
        display: flex;
        align-items: center;
    }
`;

export const TabletBox = styled.div`
    ${mq.tablet} {
        padding-top: 65px;
        padding-bottom: 65px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                rgba(9, 30, 63, 0.8),
                rgba(9, 30, 63, 0.8)
            ),
            url(${tabletRegisterBg});

        ${mq.retinax2} {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${tabletRegisterBgx2});
        }
    }
    ${mq.desktop} {
        padding-top: 185px;
        padding-bottom: 175px;
        background-image: linear-gradient(
                rgba(9, 30, 63, 0.8),
                rgba(9, 30, 63, 0.8)
            ),
            url(${desktopRegisterBg});

        ${mq.retinax2} {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${desktopRegisterBgx2});
        }
    }
`;

export const MobBox = styled.div`
    ${mq.mobileOnly} {
        padding: 32px 20px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                rgba(9, 30, 63, 0.8),
                rgba(9, 30, 63, 0.8)
            ),
            url(${mobRegisterBg});

        ${mq.retinax2} {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${mobRegisterBgx2});
        }
    }
    ${mq.tablet} {
        width: 400px;
        height: 609px;
        padding: 40px;
        background-color: ${colors.whiteBg};
        margin: 0 auto;
    }

    ${mq.desktop} {
        margin: 0 75px;
    }
`;

export const Button = styled.button`
    position: relative;
    display: flex;
    font-family: ${fonts.roboto};
    font-size: 16px;
    line-height: 2.4;

    color: #707375;
    background-color: ${colors.inputBg};
    box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 29px;
    padding-left: 50px;
    padding-right: 50px;
`;

export const GoogleIcon = styled.span`
    position: absolute;
    top: 11px;
    left: 14px;
    margin-right: 17px;
`;

export const LinkBox = styled.p`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.23;
`;

export const LinkSpan = styled.span`
    margin-right: 5px;
    color: ${colors.darkGrayText};
`;

export const Link = styled(link)`
    text-decoration-line: underline;
    color: ${colors.accentText};
`;

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

export const Label = styled.label`
    ${label};
`;

export const PasLabel = styled.label`
    ${label};
    ${mq.tablet} {
        margin-bottom: 35px;
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
    padding: 20px 64px;
    margin-bottom: 20px;
`;
