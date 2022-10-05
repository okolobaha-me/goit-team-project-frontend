import styled from '@emotion/styled';
import {colors, fonts, mq} from '../../baseStyles';
import {Container as componentbox} from '../../baseStyles/commonStyles';

import {
    desktopLoginBg,
    desktopLoginBgx2,
    mobLoginBg,
    mobLoginBgx2,
    tabletLoginBg,
    tabletLoginBgx2,
} from '../../images';
import { Link as link } from 'react-router-dom';

export const Container = styled(componentbox)`
    height: calc(100vh - 60px);
    ${mq.mobile} {
        padding: 0;
    }
`;

export const DesktopBox = styled.div`
    ${mq.mobile} {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    ${mq.tablet} {
        width: 100%;
        justify-content: center;
    }

    ${mq.desktop} {
        flex-direction: row;
    }
`;

export const TabletBox = styled.div`
    ${mq.mobile} {
        height: 100vh;
    }

    ${mq.tablet} {
        display: flex;
        align-items: center;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                rgba(9, 30, 63, 0.8),
                rgba(9, 30, 63, 0.8)
            ),
            url(${tabletLoginBg});

        ${mq.retinax2} {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${tabletLoginBgx2});
        }
    }
    ${mq.desktop} {
        background-image: linear-gradient(
                rgba(9, 30, 63, 0.8),
                rgba(9, 30, 63, 0.8)
            ),
            url(${desktopLoginBg});

        ${mq.retinax2} {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${desktopLoginBgx2});
        }
    }
`;

export const MobBox = styled.div`
    ${mq.mobileOnly} {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 32px 20px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: linear-gradient(
                rgba(9, 30, 63, 0.8),
                rgba(9, 30, 63, 0.8)
            ),
            url(${mobLoginBg});

        ${mq.retinax2} {
            background-image: linear-gradient(
                    rgba(9, 30, 63, 0.8),
                    rgba(9, 30, 63, 0.8)
                ),
                url(${mobLoginBgx2});
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
    box-shadow: 0 2px 2px rgba(9, 30, 63, 0.15);
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

export const Link = styled(link)`
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
    ${mq.tabletOnly} {
        padding: 64px 0 71px 0;
    }

    ${mq.desktop} {
        width: 730px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
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
    height: 0;
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
