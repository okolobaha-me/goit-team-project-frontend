import styled from '@emotion/styled';
import { btn, input } from '../../baseStyles/commonStyles';
import { mq } from '../../baseStyles/utils/mediaQueries';
import { colors, fonts } from '../../baseStyles/utils/variables';
import images from '../../images/mob/mobLoginBg.jpg';

export const Box = styled.div`
    padding: 32px 20px;
    background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
  url(${images});
`

export const Button = styled.button`
    /* ${btn}; */
    /* max-width: 150px; */
    display: flex;
    align-items: center;
    font-family: ${fonts.roboto};
/* font-weight: 700; */
font-size: 16px;
line-height: 2.4;
text-align: center;

color: #707375;
background-color: ${colors.inputBg};
    box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 29px;
    padding-left: 50px;
    padding-right: 50px; 
    /* ${mq.desktop} {
        margin: 0;
        margin-top: auto;
        padding-left: 63px;
        padding-right: 63px;
    } */
    position: relative;
`;

export const GoogleIcon = styled.span`
position: absolute;
top: 11px;
left: 14px;
margin-right: 17px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* margin-right: 20px;
    margin-left: 20px; */

    /* ${mq.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
    }

    ${mq.tabletOnly} {
        margin-right: 32px;
        margin-left: 32px;
        max-width: 704px;
    } */
`;

export const Input = styled.input`
    ${input};
    /* margin-top: 8px; */
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding-bottom: 20px;
`;

export const LabelText = styled.p`
font-weight: 600;
font-size: 14px;
line-height: 1.21;
color: ${colors.whiteText};
`