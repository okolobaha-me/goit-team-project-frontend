import styled from "@emotion/styled";
import { list } from "../../baseStyles/commonStyles";
import { colors } from "../../baseStyles/utils/variables";

export const Box = styled.div`
     max-width: 608px;
     margin: 0 auto; 
    background-color: ${colors.whiteBg};
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
`

export const List = styled.ul`
    ${list}
    padding: 40px;
`

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 24px;
    }
`

export const Title = styled.h2`
${list}
margin-bottom: 16px;
font-size: 19px;
line-height: 1.21;
`

export const StepText = styled.p`
    ${list}
     display: flex; 
    margin-bottom: 8px;

    font-weight: 600;
font-size: 16px;
line-height: 1.25;
color: ${colors.mainText};

`

export const StepTexIcon = styled.svg`
    margin-right: 12px;
`

export const StepDescr = styled.p`
    ${list}
    margin-left: 34px;
font-size: 14px;
line-height: 1.21;
color: ${colors.darkGrayText};
`

export const StepDescrIcon = styled.svg`
    margin-right: 8px;
`