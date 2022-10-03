import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { btn, input } from '../../baseStyles/commonStyles';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { colors, fonts } from '../../baseStyles/utils/variables';
import {
    desktopLoginBg,
    desktopLoginBgx2,
    desktopLoginBgx3,
    mobLoginBg,
    mobLoginBgx2,
    mobLoginBgx3,
    tabletLoginBg,
    tabletLoginBgx2,
    tabletLoginBgx3,
} from '../../images';

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
            url(${tabletLoginBg});

        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${tabletLoginBgx2});
        }

        @media screen and (min-device-pixel-ratio: 3),
            (min-resolution: 288dpi),
            (min-resolution: 3dppx) {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${tabletLoginBgx3});
        }
    }
    ${mq.desktop} {
        padding-top: 185px;
        padding-bottom: 175px;
        background-image: linear-gradient(
                rgba(9, 30, 63, 0.8),
                rgba(9, 30, 63, 0.8)
            ),
            url(${desktopLoginBg});

        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${desktopLoginBgx2});
        }

        @media screen and (min-device-pixel-ratio: 3),
            (min-resolution: 288dpi),
            (min-resolution: 3dppx) {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${desktopLoginBgx3});
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
            url(${mobLoginBg});

        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${mobLoginBgx2});
        }

        @media screen and (min-device-pixel-ratio: 3),
            (min-resolution: 288dpi),
            (min-resolution: 3dppx) {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${mobLoginBgx3});
        }
    }
    ${mq.tablet} {
        width: 400px;
        height: 430px;
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
    ${label}
`;

export const PasLabel = styled.label`
    ${label}
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
    ${btn}
    font-size: 16px;
    line-height: 1.25;
    padding: 20px 110px;
    ${mq.mobileOnly} {
        margin-bottom: 16px;
    }
    margin-bottom: 20px;
`;

export const Link = styled.a`
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.23;
    text-decoration-line: underline;
    color: ${colors.accentText};
`;

export const QuoteBox = styled.div`
    ${mq.mobileOnly} {
        padding: 16px 45px;
    }
    ${mq.tablet} {
        padding: 64px 0 71px 0;
    }

    ${mq.desktop} {
        padding: 64px 0 71px 0;
        margin: 0 auto;
    }
`;

export const QuoteIconSpan = styled.span`
    display: flex;
    justify-content: center;
`;

export const QuoteTextBox = styled.div`
    padding: 16px 0;
    ${mq.tablet} {
        max-width: 526px;
        padding: 20px 0;
        margin: 0 auto;
    }

    ${mq.desktop} {
        max-width: 397px;
    }
`;

export const QuoteText = styled.p`
    font-weight: 500;
    font-size: 13px;
    line-height: 1.23;
    text-align: center;

    ${mq.tablet} {
        font-size: 24px;
        line-height: 1.58;
    }

    ${mq.desktop} {
        line-height: 1.66;
    }
`;

export const Line = styled.div`
    margin: 0 auto 12px;
    width: 100px;
    height: 0px;
    border-bottom: 1px solid rgba(36, 42, 55, 0.5);

    ${mq.tablet} {
        width: 150px;
    }
`;

export const QuoteAutor = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;
    text-align: center;

    color: ${colors.darkGrayText};

    ${mq.tablet} {
        font-size: 20px;
        line-height: 1.2;
    }
`;
