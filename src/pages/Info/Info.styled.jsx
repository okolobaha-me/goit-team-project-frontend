import styled from '@emotion/styled';
import { list, btn } from '../../baseStyles/commonStyles';
import { colors, fonts } from '../../baseStyles/utils/variables';
import { mq } from '../../baseStyles/utils/mediaQueries';

export const ScreenWidth = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100vw;
`;

export const Box = styled.div`
padding: 32px 25px 40px 25px;
${mq.tablet} {
    padding: 64px 0 88px 0;
     display: flex;
    flex-direction: column;
    justify-content: center; 
}
${mq.desktop} {
    padding: 179px 0 239px 0;
}
`

export const ListBox = styled.ul`
${mq.mobileOnly} {
    margin-bottom: 60px;
}

${mq.tablet} {
    margin-left: auto;
    margin-right: auto;
}
`

export const FirstList = styled.ul`
margin-bottom: 24px;
${mq.tablet} {
    margin-bottom: 32px;
}
`

export const MainTitle = styled.h1`
    ${list}
font-family: ${fonts.abril};
font-weight: 400;
font-size: 34px;
line-height: 1.12;
text-align: center;
margin-bottom: 32px;
`

export const SecTitle = styled.h2`
${list}
font-weight: 500;
font-size: 20px;
line-height: 1.9;
margin-bottom: 14px;
`

export const Text = styled.p`
    ${list}
font-weight: 500;
font-size: 14px;
line-height: 1.21;

color: ${colors.darkGrayText};
`

export const ListItem = styled.li`
display: flex;
align-items: center;
&:not(:last-child) {
    margin-bottom: 12px;
}
`

export const IconSpan = styled.span`
    margin-right: 12px;
`

export const SecList = styled.ul`


`

export const BtnList = styled.ul`
display: flex;
justify-content: center;
${mq.tablet} {
    display: none;
}
`

export const BtnItem = styled.li`
&:not(:last-child) {
    margin-right: 20px;
}
`

export const EnterBtn = styled.button`
    ${btn}
    font-weight: 500;
    padding-left: 40px;
    padding-right: 40px;  
`

export const RegisterBtn = styled.button`
     ${btn}
     font-weight: 500;
     padding-left: 24px;
    padding-right: 24px;
`
