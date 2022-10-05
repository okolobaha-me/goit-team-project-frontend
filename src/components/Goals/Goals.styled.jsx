import styled from '@emotion/styled/macro';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { colors, fonts } from '../../baseStyles/utils/variables';
import { css } from '@emotion/react';

export const Title = styled.h2`
    padding: 18px 0;

    background: ${colors.greyBg};

    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    color: ${colors.whiteText};

    ${mq.tablet} {
        height: 60px;
        padding: 18px 20px;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const StatsItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.inputBg};
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
`;

export const Text = styled.p`
    font-weight: 700;
    font-family: ${fonts.openSans};

    ${({ booksLeft }) =>
        booksLeft
            ? css`
                  color: ${colors.accentText};
              `
            : css`
                  color: ${colors.blackBlueText};
              `};
`;

export const Description = styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 500;
    color: ${colors.darkGrayText};
`;

export const Wrapper = styled.div`
    margin: 0 auto;
    background-color: ${colors.whiteBg};
    width: 100%;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

    ${({ booksLeft }) =>
        booksLeft
            ? css`
                  ${mq.tablet} {
                      display: flex;
                      padding: 20px 44px 15px 42px;
                  }
              `
            : css`
                  ${mq.tablet} {
                      display: flex;
                      padding: 20px 52px 8px 28px;
                  }
              `};

    ${mq.desktop} {
        display: block;
        width: 288px;
        padding: 0;
    }

    ${InfoWrapper} {
        ${({ booksLeft }) =>
            booksLeft
                ? css`
                      padding: 32px 28px;
                      gap: 12px;

                      ${mq.tablet} {
                          margin-left: 20px;
                          padding: 0;
                      }
                      ${mq.desktop} {
                          margin-left: 0;
                          padding: 80px 18px;
                          gap: 20px;
                      }
                  `
                : css`
                      padding: 44px 30px;
                      gap: 20px;

                      ${mq.tablet} {
                          margin-left: auto;
                          padding: 0;
                          gap: 40px;
                      }

                      ${mq.desktop} {
                          padding: 48px 34px;
                          gap: 20px;
                      }
                  `};
    }

    ${StatsItem} {
        ${({ booksLeft }) =>
            booksLeft
                ? css`
                      width: 63px;

                      ${mq.tablet} {
                          width: 100px;
                      }

                      ${mq.desktop} {
                          width: 66px;
                      }
                  `
                : css`
                      width: 100px;
                      ${mq.desktop} {
                          width: 100px;
                      }
                  `};
    }

    ${Item} {
        ${({ booksLeft }) =>
            booksLeft
                ? css`
                      width: 100%;
                      height: 63px;
                      margin-bottom: 8px;

                      ${mq.tablet} {
                          height: 60px;
                          margin-bottom: 4px;
                      }

                      ${mq.desktop} {
                          margin-bottom: 14px;
                      }
                  `
                : css`
                      width: 100%;
                      height: 100px;
                      margin-bottom: 14px;

                      ${mq.tablet} {
                          height: 60px;
                          margin-bottom: 4px;
                      }

                      ${mq.desktop} {
                          height: 100px;
                          margin-bottom: 14px;
                      }
                  `};
    }

    ${Text} {
        ${({ booksLeft }) =>
            booksLeft
                ? css`
                      font-size: 35px;
                  `
                : css`
                      font-size: 45px;
                  `};
    }

    ${Description} {
        ${({ booksLeft }) =>
            booksLeft
                ? css`
                      font-size: 11px;
                      line-height: 1.18;
                  `
                : css`
                      ${mq.tablet} {
                          font-size: 11px;
                      }
                      ${mq.desktop} {
                          font-size: 14px;
                      }
                  `};
    }
`;
